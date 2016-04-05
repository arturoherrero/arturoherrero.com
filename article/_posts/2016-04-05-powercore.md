---
layout: post
title: Powercore
---

During the last few weeks I have been working on **[PowerCore][1]{:target="_blank"}**,
which extends the Ruby Core with useful extensions.

There are Ruby gems that do something similar, such as
[ActiveSuppor Core Extensions][2]{:target="_blank"} or [Powerpack][3]{:target="_blank"}.

In this case, this is just a collection of extensions for reference, *not* a
Ruby gem. Who wants a new dependency in the code base? Just borrow the code
that you consider useful, but be careful;

...most of the time I have created new methods:

```ruby
"abc".first  # => "a"
```

...but sometimes I have overridden the default Ruby implementation:

```ruby
[1, 2, 3, 4].take(-2)  # => [3, 4]
```

...or even worse, I have removed Ruby methods to do some tricks:

```ruby
[1,2,3] |
  ->(array)  { array.first } |
  ->(int)    { int.to_s } |
  ->(string) { string + "2" }
# => "12"
```

[Come and see!][1]{:target="_blank"}


[1]: https://github.com/arturoherrero/powercore
[2]: http://edgeguides.rubyonrails.org/active_support_core_extensions.html
[3]: https://github.com/bbatsov/powerpack
