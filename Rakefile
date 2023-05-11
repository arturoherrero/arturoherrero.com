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
    ignore_status_codes: [302],
  }

  HTMLProofer.check_directory("./_site", options).run
end

task default: :test
