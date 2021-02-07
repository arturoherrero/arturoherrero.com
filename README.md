# arturoherrero.com

[![Build Status](https://github.com/arturoherrero/arturoherrero.com/workflows/build/badge.svg?branch=master)](https://github.com/arturoherrero/arturoherrero.com/actions)

My personal website.

A [Jekyll][1] powered website, hosted by [GitHub Pages][2] at https://arturoherrero.com.


## Setup

    $ bundle install


## Build

Builds the site any time a source file changes and serves it locally:

    $ bundle exec jekyll server --livereload --incremental


## Test

The simplest test is to run `jekyll build` and ensures that Jekyll doesn’t
fail to build the site. It doesn’t check the resulting site, but it does ensure
things are built properly.

When testing Jekyll output, there is no better tool than [html-proofer][3].
This tool checks your resulting site to ensure all links and images exist.

Run the test:

    $ rake


[1]: https://jekyllrb.com/
[2]: https://pages.github.com/
[3]: https://github.com/gjtorikian/html-proofer
