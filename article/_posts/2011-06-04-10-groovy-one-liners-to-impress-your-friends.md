---
layout: post
title: 10 Groovy One Liners to Impress Your Friends
redirect_from: /2011/06/04/10-groovy-one-liners-to-impress-your-friends/
---

I find that comparing programming languages is a worthwhile exercise mainly
because of the different techniques and styles that you are exposed to.

After 10 [Scala]{:target="_blank"} / [CoffeeScript]{:target="_blank"} /
[Ruby]{:target="_blank"} / [Python]{:target="_blank"} / [Haskell]{:target="_blank"}
/ [Clojure]{:target="_blank"} /[C#]{:target="_blank"} / [F#]{:target="_blank"}
one liners to impress your friends, here are the Groovy one liners.

#### 1. Multiple Each Item in a List by 2

```groovy
(1..10)*.multiply(2)
```

#### 2. Sum a List of Numbers

```groovy
(1..1000).sum()
```

#### 3. Verify if Exists in a String

```groovy
def wordList = ['groovy', 'akka', 'grails framework', 'spock', 'typesafe']
def tweet = 'This is an example tweet talking about groovy and spock.'
wordList.any { word -> tweet.contains(word) }
```

#### 4. Read in a File

```groovy
def fileText = new File('data.txt').text
def fileLines = new File('data.txt').readLines()
```

#### 5. Happy Birthday to You!

```groovy
(1..4).each { println 'Happy Birthday ' + ((it == 3) ? 'dear Arturo' : 'to You') }
```

#### 6. Filter list of numbers

```groovy
def (passed, failed) = [49, 58, 76, 82, 88, 90].split{ it > 60 }
```

#### 7. Fetch and Parse an XML web service

```groovy
def results = new XmlSlurper().parse('http://search.twitter.com/search.atom?&q=groovy')
```

#### 8. Find minimum (or maximum) in a List

```groovy
[14, 35, -7, 46, 98].min()
[14, 35, -7, 46, 98].max()
```

#### 9. Parallel Processing

```groovy
import groovyx.gpars.*
GParsPool.withPool { def result = dataList.collectParallel { processItem(it) } }
```

<sup>Using [Gpars]{:target="_blank"} that offers intuitive and safe ways to
handle Groovy tasks concurrently.</sup>

#### 10. Sieve of Eratosthenes

```groovy
def t = 2..100
(2..Math.sqrt(t.last())).each { n -> t -= ((2*n)..(t.last())).step(n) }
println t
```

#### 11. Bonus: FizzBuzz

```groovy
for (i in 1..100) { println "${i%3?'':'Fizz'}${i%5?'':'Buzz'}" ?: i }
```


[Scala]: https://mkaz.com/2011/05/31/10-scala-one-liners-to-impress-your-friends/
[CoffeeScript]: http://ricardo.cc/2011/06/02/10-CoffeeScript-One-Liners-to-Impress-Your-Friends.html
[Ruby]: http://programmingzen.com/2011/06/02/10-ruby-one-liners-to-impress-your-friends/
[Python]: http://codeblog.dhananjaynene.com/2011/06/10-python-one-liners-to-impress-your-friends/
[Haskell]: http://blog.fogus.me/2011/06/03/10-haskell-one-liners-to-impress-your-friends/
[Clojure]: https://gist.github.com/klang/1007697
[C#]: https://gist.github.com/1004837
[F#]: http://willwhim.wpengine.com/2011/06/02/fsharp-one-liners-to-impress-your-friends/

[Gpars]: http://gpars.codehaus.org/
[Groovy Prime Numbers]: http://www.thejavajar.com/2009/05/11/groovy-prime-numbers/
