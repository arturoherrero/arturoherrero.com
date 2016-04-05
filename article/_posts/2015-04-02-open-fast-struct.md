---
layout: post
title: OpenFastStruct
---

After having a lot of fun building [YARR][1], I have built a new Ruby gem.

**[OpenFastStruct][2]{:target="_blank"}** is a
data structure, similar to an OpenStruct, that allows the definition of
arbitrary attributes with their accompanying values. It benchmarks ~3x slower
than a Hash, but **it's ~4x faster than OpenStruct**.

The project was featured on [issue #239 of Ruby Weekly newsletter][3]{:target="_blank"} and was a Ruby trending repository on GitHub for two days.


### Examples

#### Basic usage

```ruby
require "ofstruct"

person = OpenFastStruct.new
person.name = "John Smith"
person.age  = 70

puts person.name     # -> "John Smith"
puts person.age      # -> 70
puts person.address  # -> #<OpenFastStruct>
```

#### Initialize and update from a Hash

An OpenFastStruct uses a Hash internally to store the methods and values, and
can even be initialized or updated with one:

```ruby
require "ofstruct"

person = OpenFastStruct.new(:name => "John Smith")
puts person.name  # -> "John Smith"

person.update(:name => "David Smith", :age => 70)
puts person.name  # -> "David Smith"
puts person.age   # -> 70
```

#### Remove attributes

Removing the presence of a method requires the execution of the `#delete_field`
method, which sets the property value to a new empty OpenFastStruct.

```ruby
require "ofstruct"

person = OpenFastStruct.new
person.name = "John Smith"
person.delete_field(:name)
puts person.name  # -> #<OpenFastStruct>
```

#### *Black hole* object

An OpenFastStruct instance is a *black hole* object that supports infinite
chaining of attributes.

```ruby
require "ofstruct"

person = OpenFastStruct.new
person.address.number = 4
puts person.address.number  # -> 4
```


### Benchmarks

Probably you heard that you should never, ever use OpenStruct because the
performance penalty is prohibitive. You can use OpenFastStruct instead!

#### Comparation between Hash, OpenFastStruct and OpenStruct

    Calculating -------------------------------------
                    Hash    25.518k i/100ms
          OpenFastStruct    10.527k i/100ms
              OpenStruct     3.236k i/100ms
    -------------------------------------------------
                    Hash    487.517k (±11.9%) i/s -      2.399M
          OpenFastStruct    159.952k (± 4.0%) i/s -    800.052k
              OpenStruct     45.602k (± 4.7%) i/s -    229.756k

    Comparison:
                    Hash:   487516.9 i/s
          OpenFastStruct:   159952.4 i/s - 3.05x slower
              OpenStruct:    45601.6 i/s - 10.69x slower


[1]: /yarr-yet-another-ruby-repl/
[2]: https://github.com/arturoherrero/ofstruct
[3]: http://rubyweekly.com/issues/239
