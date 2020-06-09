require "html-proofer"

task :test do
  sh "bundle exec jekyll build"

  options = {
    assume_extension: true,
    cache: {
      timeframe: "4w"
    },
    check_external_hash: true,
    check_favicon: true,
    check_html: true,
    check_img_http: true,
    empty_alt_ignore: true,
    typhoeus: {
      # Avoid strange SSL errors: https://github.com/gjtorikian/html-proofer/issues/376
      ssl_verifypeer: false,
      ssl_verifyhost: 0,
    },
  }

  HTMLProofer.check_directory("./_site", options).run
end

task default: :test
