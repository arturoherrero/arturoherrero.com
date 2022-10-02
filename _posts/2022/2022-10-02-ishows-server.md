---
layout: post
title: iShows Server
description: The side project that served a billion images.
tags: en
---

About 10 years ago, I got involved in a very interesting project: [iShows][1].
Now that the project is over, I would like to pay a small tribute to it.

At that time, a server was needed to provide images with specific sizes to
an iOS mobile application. This started as a side project, but ended up serving
over a billion images. Billion! One thousand million. 1,000,000,000.

Basically, the server was a man-in-the-middle. The mobile application requested
an image to the server, the server forwarded the request to TheTVDB, got the
image, resized or cropped it, cached the final image, and served it to the mobile device.

Along the way, I solved many problems, and I always tried to stick to the Minimal
Viable Change (MVC)—the smallest possible solution that offers value to the
users. Examples:
- I switched the server to DigitalOcean to save money.
- Caching images requires a lot of disk space, so a cron job deleted images
  that had not been accessed for 30 days.
- Working on a directory with 362444 files was hard. You get errors for normal
  operations: `/bin/rm: cannot execute [Argument list too long]`.
- A Docker image was the way to go, but a snapshot of the server was enough.
- Sometimes images that gave errors were requested, but a simple text file was
  enough to filter out the bad URLs.

We were lucky with the server and, despite receiving constant authentication
attempts, there were no major problems. Our uptime was practically the same as
the DigitalOcean or TheTVDB uptime. I suspect that a simple command
line one-liner Denial-of-Service attack from any laptop would have given us a
lot of headaches, but that was an MVC that I did not have to solve.

The project is open source [arturoherrero/ishows][2]{:target="_blank" rel="noreferrer"}.
Here are the glorious ~50 lines of code that have served a thousand million images.

```ruby
require "logger"
require "mini_magick"
require "sinatra/base"

IMAGES_PATH = "images/"
BAD_URLS_FILE = "tmp/bad-urls.txt"

class Server < Sinatra::Base
  # Resize an image for a given URL
  # http://localhost:3000/width/X/url
  get "/width/:value/*/?" do |value, url|
    process_image(value, url) do |image|
      resize(image, value)
    end
  end

  # Resize and crop an image for a given URL
  # http://localhost:3000/crop/XxY/url
  get "/crop/:dimensions/*/?" do |dimensions, url|
    process_image(dimensions, url) do |image|
      resize(image, "#{dimensions}^")
      crop(image, dimensions)
    end
  end

  private

  def process_image(dimensions, url)
    # WORKAROUND: Sinatra match the route parameter
    # with only one slash http:/
    url[":/"] = "://"

    unless File.foreach(BAD_URLS_FILE).any? { |line| line.include?(url) }
      unless File.exist?(filename)
        image = MiniMagick::Image.open(url)
        yield(image)
        image.write(filename)
      end

      send_file(filename, type: "image/jpeg", disposition: "inline")
    end
  rescue StandardError
    Logger.new(BAD_URLS_FILE).error(url)
  end

  def filename
    @filename ||= "#{IMAGES_PATH}#{Digest::SHA1.hexdigest(request.path)}"
  end

  def resize(image, dimensions)
    image.resize(dimensions)
  end

  # WORKAROUND: http://stackoverflow.com/q/8418973/462015
  def crop(image, dimensions)
    image.crop("#{dimensions}+0+0")
  end
end
```

[1]: /ishows/
[2]: https://github.com/arturoherrero/ishows
