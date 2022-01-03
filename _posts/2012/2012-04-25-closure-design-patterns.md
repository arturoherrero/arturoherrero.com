---
layout: post
title: Closure Design Patterns
description: There are a lots of documentation about software design patterns, but I’m interesting in closure design patterns.
tags: en
redirect_from: /2012/04/25/closure-design-patterns/
---

### Design Patterns

These days I'm learning design patterns. There are a lots of documentation
about software design patterns, but I'm interesting in **closure design
patterns**.*

Many patterns imply object-orientation, so may not be as applicable in dynamic
languages. Peter Norvig demonstrates that 16 out of 23 patterns in the Design
Patterns book are simplified or eliminated, [Design Patterns in Dynamic
Languages][1]{:target="_blank" rel="noreferrer"}.

I've found an interesting presentation of Venkat Subramaniam about [Design
Patterns in Java and Groovy][2]{:target="_blank" rel="noreferrer"} and another presentation of Neal Ford about
[Design Patterns in Dynamic Languages][3]{:target="_blank" rel="noreferrer"}. Here, I extract some patterns of
these presentations that involve closures and add others patterns based on my
own experience.

You can also find the same examples for Ruby here: [Closure Design Patterns. Ruby Edition][4].

<sup>\* Groovy makes no such distinction between closures or anonymous functions.
What I'm really trying to get at is how we can use tools such as first-class
functions, lambdas and closures when implementing design patterns.</sup>


### Closure Design Patterns

#### Execute Around Method

A pair of operation that needs to be performed before and after operations.

```groovy
def operations(closure) {
    println "Open"
    closure()
    println "Close"
}

operations { println "Operation" }

===> Open
===> Operation
===> Close
```


#### Pluggable Behavior

Specify the behavior of an object at runtime.

```groovy
def selectValues(number, closure) {
    def list = []
    1.upto(number) {
        if (closure(it)) list << it
    }
    return list
}

assert [2, 4, 6, 8, 10] == selectValues(10) { it % 2 == 0 }  // even
assert [1, 3, 5, 7, 9]  == selectValues(10) { it % 2 != 0 }  // odd
```


#### Iterator Pattern

Allows sequential access to the elements.

```groovy
def listNumbers(closure) {
    (0..3).each { closure it }
}

listNumbers {
    if (it < 2) println "$it is a little number"
    else println "$it is a big number"
}

===> 0 is a little number
===> 1 is a little number
===> 2 is a big number
===> 3 is a big number
```


#### Dynamical Conditional Execution

Create and execute a conditional operation.

```groovy
def greet(user, successClosure, failClosure) {
    if (isAdmin(user)) successClosure()
    else failClosure()
}

greet(user, { println "Hi Admin!" }, { println "Hello User" })
```


#### Template Method Pattern

Define common algorithm steps (getting a customer) and customizations (passed as a closure).

```groovy
def withCustomer(id, closure) {
    def customer = getCustomer(id)
    closure(customer)
}

withCustomer(1234) { customer ->
    println "Found customer $customer.name"
}
```


#### Loan Pattern

Ensures that a resource is deterministically disposed of once it goes out of scope.

```groovy
def withListOfWordsForEachLine(file, closure) {
    def reader = file.newReader()
    try {
        reader.splitEachLine(' ', closure)
    } finally {
        reader?.close()
    }
}

withListOfWordsForEachLine(file) { wordList ->
    println wordList
}
```


#### Command Design Pattern

Encapsulate all the information needed to call a method at a later time.

```groovy
def count = 0
def commands = []

1.upto(10) {
    commands.add { count++ }
}

println "count is initially ${count}"
commands.each { cmd ->
    cmd()
}
println "did all commands, count is ${count}"

===> count is initially 0
===> did all commands, count is 10
```


#### Strategy Pattern

Define a family of interchangeable algorithms.

```groovy
calcMult = { n, m -> n * m }
calcAdds = { n, m ->
    def result = 0
    n.times { result += m }
    return result
}

def calcStrategies = [calcMult, calcAdds]
calcStrategies.each { calc ->
    assert 10 == calc(5, 2)
}
```


#### Factory Pattern

Abstract the object creation process (currying as a function factory).

```groovy
def adder = { x, y -> x + y }
def incrementer = adder.curry(1)

assert 5 == incrementer(4)
```


#### Method Combination

Build a method from components.

```groovy
def sum = { Collection collection -> collection.sum() }
def first2 = { Collection collection -> collection.take(2) }
def take2andAdd = first2 >> sum

assert 3 == take2andAdd([1, 2, 3, 4, 5])
```


[1]: http://norvig.com/design-patterns/
[2]: http://www.agiledeveloper.com/presentations/design_patterns_in_java_and_groovy.pdf
[3]: https://github.com/nealford/presentations/blob/master/Design%20Patterns%20in%20Dynamic%20Languages%20(Neal%20Ford).pdf
[4]: /closure-design-patterns-ruby-edition/
