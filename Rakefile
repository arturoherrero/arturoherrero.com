require "html-proofer"

task :test do
  sh "bundle exec jekyll build"

  options = {
    assume_extension: true,
    check_external_hash: true,
    check_favicon: true,
    check_html: true,
    check_img_http: true,
    empty_alt_ignore: true,
    cache: {
      timeframe: "4w"
    }
  }

  HTMLProofer.check_directory("./_site", options).run
rescue => exception
  puts exception
end

task default: :test
