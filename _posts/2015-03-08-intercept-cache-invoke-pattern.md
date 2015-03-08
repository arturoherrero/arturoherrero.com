---
layout: post
title: Intercept-Cache-Invoke Pattern
---

The first time that I heard about the **Intercept-Cache-Invoke pattern** was from
Graeme Rocher when he implemented the dynamic finders on Grails.

The idea is to dynamically figure out the behaviour for methods upon invocation,
so we can create new methods with flexible and dynamic names *on-the-fly*.

A synthesized method may not exist as a separate method until we call it. When
we call a nonexistent method, we can intercept the call, allow our
application to implement it on the fly, let us cache that implementation for
future invocation, and then invoke it. The first call takes performance hit but
next calls are faster.


{% highlight ruby %}
require "benchmark/ips"

class Person
  PLAYS = %w(tennis volley basket)

  def method_missing(name, *args)
    game = name.to_s.split("play_").last
    if PLAYS.include?(game)
      "playing #{game}"
    else
      super
    end
  end
end

class PersonCached
  PLAYS = %w(tennis volley basket)

  def method_missing(name, *args)
    game = name.to_s.split("play_").last
    if PLAYS.include?(game)
      cache_and_invoke(name) do
        "playing #{game}"
      end
    else
      super
    end
  end

  def cache_and_invoke(name)
    self.class.class_eval do
      define_method(name) do
        yield
      end
    end
    yield
  end
end

Benchmark.ips do |x|
  x.report "Method Missing" do
    person = Person.new
    person.play_tennis
    person.play_tennis
  end

  x.report "Intercept-Cache-Invoke" do
    person = PersonCached.new
    person.play_tennis
    person.play_tennis
  end

  x.compare!
end
{% endhighlight %}


### Benchmark

It benchmarks about ~2.5x to ~4.5x faster than the method missing version. The
result depends on how is the implementation of the solution. For example, here
we are using a block to cache and invoke new methods. Blocks are slow and also
the performance depends if we use `block.call` or just `yield`
<sup>[[benchmark][1]{:target="_blank"}]</sup>.

    Calculating -------------------------------------
            Method Missing    20.758k i/100ms
    Intercept-Cache-Invoke    48.562k i/100ms
    -------------------------------------------------
            Method Missing    316.730k (± 8.0%) i/s -      1.578M
    Intercept-Cache-Invoke      1.010M (± 5.2%) i/s -      5.050M

    Comparison:
    Intercept-Cache-Invoke:  1010089.5 i/s
            Method Missing:   316729.8 i/s - 3.19x slower


[1]: https://github.com/JuanitoFatas/fast-ruby#proccall-vs-yield-code
