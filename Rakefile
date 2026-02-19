require "html-proofer"

task :test do
  sh "bundle exec jekyll build"

  options = {
    cache: {
      timeframe: { external: "4w" }
    },
    enforce_https: false,
    check_favicon: true,
    check_html: true,
    check_img_http: true,
    empty_alt_ignore: true,
    check_external_hash: false,
    ignore_status_codes: [400,403],
  }

  HTMLProofer.check_directory("./_site", options).run
  HTMLProofer.check_links(File.read("./_site/llms.txt").scan(%r{https:[^\s)]+}), options).run
end

task default: :test
