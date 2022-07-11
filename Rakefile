require "html-proofer"

task :test do
  sh "bundle exec jekyll build"

  options = {
    cache: {
      timeframe: { external: "4w" }
    },
    enforce_https: false,
    check_external_hash: true,
    check_favicon: true,
    check_html: true,
    check_img_http: true,
    empty_alt_ignore: true,
    typhoeus: {
      # Avoid Twitter 400 error https://github.com/gjtorikian/html-proofer/issues/619
      headers: { "User-Agent" => "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/81.0" },
      # Avoid strange SSL errors: https://github.com/gjtorikian/html-proofer/issues/376
      ssl_verifypeer: false,
      ssl_verifyhost: 0,
    },
  }

  HTMLProofer.check_directory("./_site", options).run
end

task default: :test
