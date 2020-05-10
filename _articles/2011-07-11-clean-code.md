---
layout: post
title: Clean Code
description: A Handbook of Agile Software Craftsmanship.
redirect_from: /2011/07/11/clean-code/
---

![Clean Code][5]
{: .side-image }

[Clean Code: A Handbook of Agile Software Craftsmanship][1]{:target="_blank"}
is a book that every developer should read.

I try to summarize a few ideas from the book:

- #### Meaningful Names

    The first step to writing good code is that names have meaning. The
    variables, methods and classes should have a good name to know why they
    exist and what they do. [Tim Ottinger's *Rules for Variable and Class Naming*][4]{:target="_blank"}.

- #### Functions

    The functions have to be small, should do one thing and should do well,
    maintaining a single level of abstraction. Also, we must try to reduce the
    number of arguments.

- #### Comments

    Don't comment bad code, rewrite it.

- #### Formatting

    The formatting of the code has one purpose: readability. The newspapper methapor:
    when reading code, the first functions that we find have to
    be the main and if we want we can go into details below.

- #### Objects And Data Structures

    Objects hide their data and expose functions to operate with them, in the
    other hand we expose data structures directly.

- #### Error Handling

    Try to separate the logic of our application from the exception handler and
    don't pass or return null values from functions.

- #### Unit Test

    The tests are a very important part building an applications. Ideally, do TDD
    and create test code as good as the code of the rest of the application.

- #### Classes

    Classes must be small with a high cohesion.

- #### Emergence

    To create a good emergent design we should run all tests, eliminate duplication,
    express the intention in the code and minimize the number of classes and methods.
    These are Kent Beck's *Four Rules of Simple Design*:
    - Martin Fowler on [Beck Design Rules][2]{:target="_blank"}.
    - [Understanding the Four Rules of Simple Design][3]{:target="_blank"} by Corey Haines.
    {: .element-related }

---

I did a talk at the Agile Madrid User Group about this book.

<div class="iframe-container iframe-519">
  <iframe src="https://www.slideshare.net/slideshow/embed_code/8036914"
  width="720" height="519" frameborder="0" marginwidth="0" marginheight="0"
  scrolling="no"></iframe>
</div>


[1]: https://www.pearson.com/us/higher-education/program/Martin-Clean-Code-A-Handbook-of-Agile-Software-Craftsmanship/PGM63937.html
[2]: https://martinfowler.com/bliki/BeckDesignRules.html
[3]: https://leanpub.com/4rulesofsimpledesign
[4]: http://www.maultech.com/chrislott/resources/cstyle/ottinger-naming.html
[5]: /assets/images/articles/clean-code.jpg
