---
layout: post
title: Closure design patterns. Ruby edition
description: Back in 2012 I wrote an article about closure design patterns using Groovy. I have decided to use Ruby this time.
tags: programming
---

Back in 2012 I wrote an article about **[closure design patterns][1]**. I used
Groovy as a programming language but now I have decided to use Ruby (the
programming language that I have mainly been using for two years). This article
was featured on [issue #231 of Ruby Weekly newsletter][2]{:target="_blank" rel="noreferrer"}.

I want to keep the same examples, so I have created a helper method to make
assertions.

```ruby
def assert(expression)
  raise "Assertion failed" unless expression
end
```


#### Execute Around Method

A pair of operations that need to be performed before and after operations.

```ruby
def operations(&block)
  puts "Open"
  block.call
  puts "Close"
end

operations { puts "Operation" }

=> Open
=> Operation
=> Close
```


#### Pluggable Behavior

Specifies the behavior of an object at runtime.

```ruby
def select_values(number, &block)
  1.upto(number).select(&block)
end

assert [2, 4, 6, 8, 10] == select_values(10) { |i| i % 2 == 0 }  # even
assert [1, 3, 5, 7, 9]  == select_values(10) { |i| i % 2 != 0 }  # odd
```


#### Iterator Pattern

Allows sequential access to the elements.

```ruby
def list_numbers(&block)
  (0..3).each(&block)
end

list_numbers do |i|
  if i < 2
    puts "#{i} is a little number"
  else
    puts "#{i} is a big number"
  end
end

=> 0 is a little number
=> 1 is a little number
=> 2 is a big number
=> 3 is a big number
```


#### Dynamical Conditional Execution

Creates and executes a conditional operation.

```ruby
def greet(user, success_block, fail_block)
  if user.is_admin?
    success_block.call
  else
    fail_block.call
  end
end

greet(user, -> { puts "Hi Admin!" }, -> { puts "Hello User" })
```


#### Template Method Pattern

Defines common algorithm steps (getting a customer) and customizations (passed
as a block).

```ruby
def with_customer(id, &block)
  customer = get_customer(id)
  block.call(customer)
end

with_customer(1234) do |customer|
  puts "Found customer #{customer.name}"
end
```


#### Loan Pattern

Ensures that a resource is deterministically disposed of once it goes out of scope.

```ruby
def with_list_of_words_for_each_line(file, &block)
  File.open(file) do |f|
    f.each_line { |line| block.call(line.split(' ')) }
  end
end

with_list_of_words_for_each_line(file) do |word_list|
  puts word_list
end
```


#### Command Design Pattern

Encapsulates all the information needed to call a method at a later time.

```ruby
count = 0
commands = []

1.upto(10) do
  commands << -> { count += 1 }
end

puts "count is initially #{count}"
commands.each do |cmd|
  cmd.call
end
puts "did all commands, count is #{count}"

=> count is initially 0
=> did all commands, count is 10
```


#### Strategy Pattern

Defines a family of interchangeable algorithms.

```ruby
calc_mult = ->(n, m) { n * m }
calc_adds = -> (n, m) do
  result = 0
  n.times { result += m }
  result
end

calc_strategies = [calc_mult, calc_adds]
calc_strategies.each do |calc|
  assert 10 == calc.call(5, 2)
end
```


#### Factory Pattern

Abstracts the object creation process (currying as a function factory).

```ruby
adder = ->(x, y) { x + y }.curry
incrementer = adder.call(1)

assert 5 == incrementer.call(4)
```


#### Method Combination

Builds a method from components.

```ruby
sum = ->(collection) { collection.inject(:+) }
first2 = ->(collection) { collection.take(2) }
take2_and_add = ->(collection) { sum.call(first2.call(collection)) }

assert 3 == take2_and_add.call([1, 2, 3, 4, 5])
```


#### Closure Composition

Since Ruby doesn't have closure composition I'd like to update my previous
example with it.

```ruby
class Proc
  def >>(f)
    ->(*args) { f.call(self.call(*args)) }
  end
end

sum = ->(collection) { collection.inject(:+) }
first2 = ->(collection) { collection.take(2) }
take2_and_add = first2 >> sum

assert 3 == take2_and_add.call([1, 2, 3, 4, 5])
```


[1]: /closure-design-patterns/
[2]: http://rubyweekly.com/issues/231
