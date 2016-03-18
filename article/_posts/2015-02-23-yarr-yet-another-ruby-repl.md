---
layout: post
title: YARR. Yet Another Ruby REPL
---

**[YARR (Yet Another Ruby REPL)][1]{:target="_blank"}** is a Ruby REPL (it's just a hobby, it won't be big and
professional like Pry). YARR was inspired by groovysh<sup>[1][2]{:target="_blank"}</sup>,
IRB<sup>[2][3]{:target="_blank"}</sup>, Pry<sup>[3][4]{:target="_blank"}</sup>, Bash
<sup>[4][5]{:target="_blank"}</sup> and Vim<sup>[5][6]{:target="_blank"}</sup>.

![yarr][7]

A read–eval–print loop (REPL) is an interactive environment that takes user
inputs, evaluates them, and returns the result to the user. A simple
REPL to evaluate single valid lines of Ruby code, could be something like this:

```ruby
loop do
  print "ruby> "
  input = gets
  puts "=> #{eval(input)}"
end
```

I started to play with this idea and finally I build YARR that is a command-line
application which allows easy access to evaluate Ruby expressions, define classes
and run simple experiments.


### Interesting things in the source code

This project has been a good opportunity to explore new things. I also only
wanted to use the Ruby standard libraries without any external gem.

#### 1. Method names don't have restrictions

Method names in Ruby may contain upper-case and lower-case letters, numbers,
underscores `_` and the punctation signs `!`, `?`, `=`.

A method name can't begin with a number and the characters `!`, `?` and `=` can
only appear at the end.

That's correct if we use the usual way of defining new methods with `def`,
however there seems to be no restrictions on what can be used if we use
`define_method` <sup>[[code][8]{:target="_blank"}]</sup>.

```ruby
define_method("!") do |args|
  `#{args}`
end
```

#### 2. Capture STDOUT

It's possible to redirect the standard output or store it into a variable. I
captured the STDOUT for a block of code and then restore it <sup>[[code][9]{:target="_blank"}]</sup>.

```ruby
def capture_stdout(&block)
  stdout = $stdout
  $stdout = StringIO.new
  block.call
ensure
  $stdout = stdout
end
```

#### 3. Arrange-Act-Assert pattern

Arrange-Act-Assert is a pattern for arranging and formatting code in test methods.
It is very popular from the Given-When-Then style of representing tests.

I used the RSpec syntax with some private methods, so each method should group
these functional sections <sup>[[code][10]{:target="_blank"}]</sup>:

- Arrange all necessary preconditions and inputs (`setup`).
- Act on the object or method under test (`given`).
- Assert that the expected results have occurred (`expect`).

```ruby
it "executes multiline line declaration and invocation" do
  setup("def foo", "1", "end")
  given("foo")
  expect(interpreter.call).to eq("\e[1m===>\e[0m 1")
end
```


[1]: https://github.com/arturoherrero/yarr/
[2]: http://groovy-lang.org/groovysh.html
[3]: http://ruby-doc.org/stdlib-2.2.0/libdoc/irb/rdoc/IRB.html
[4]: http://pryrepl.org/
[5]: http://www.gnu.org/software/bash/
[6]: http://www.vim.org/
[7]: /assets/images/yarr.png
[8]: https://github.com/arturoherrero/yarr/blob/0.0.1/lib/interpreter.rb#L82-84
[9]: https://github.com/arturoherrero/yarr/blob/0.0.1/lib/interpreter.rb#L104-110
[10]: https://github.com/arturoherrero/yarr/blob/0.0.1/spec/lib/interpreter_spec.rb#L22-26
