---
layout: post
title: Clean Code
description: A Handbook of Agile Software Craftsmanship.
tags: programming
---

![Clean Code][5]
{: .side-image }

[Clean Code: A Handbook of Agile Software Craftsmanship][1]{:target="_blank"
rel="noreferrer"} is a book that every developer should read, especially at the
beginning of their careers when many basic programming concepts need to be
settled.

The following is a short summary with the main ideas from the book. Below you
can also find my talk from the Agile Madrid User Group about this book, which
covers many different examples.

- #### Meaningful names

    The first step to writing good code is that names have meaning. The
    variables, methods and classes should have a good name to know why they
    exist and what they do. [Tim Ottinger's *Rules for Variable and Class Naming*][4]{:target="_blank" rel="noreferrer"}.

- #### Functions

    The functions have to be small, should do one thing and do it well,
    maintaining a single level of abstraction. Also, we must try to reduce the
    number of arguments.

- #### Comments

    Don't comment bad code, rewrite it.

- #### Formatting

    The formatting of the code has one purpose: readability. The newspaper
    metaphor: when reading code, the main functions should appear first, and we
    can go into details below.

- #### Objects and data structures

    Objects hide their data and expose functions to operate with them, on the
    other hand, data structures expose their data directly.

- #### Error handling

    Try to separate the logic of our application from the exception handler and
    don't pass or return null values from functions.

- #### Unit test

    Tests are a very important part of building applications. Ideally, do TDD
    and create test code as good as the code of the rest of the application.

- #### Classes

    Classes must be small with high cohesion.

- #### Emergence

    To create a good emergent design we should run all tests, eliminate duplication,
    express the intention in the code, and minimize the number of classes and methods.
    These are [Kent Beck's *Four Rules of Simple Design*][2]{:target="_blank" rel="noreferrer"}.

<div class="iframe-container iframe-519">
  <iframe src="https://www.slideshare.net/slideshow/embed_code/8036914"
  width="720" height="519" frameborder="0" marginwidth="0" marginheight="0"
  scrolling="no"></iframe>
</div>


[1]: https://www.pearson.com/us/higher-education/program/Martin-Clean-Code-A-Handbook-of-Agile-Software-Craftsmanship/PGM63937.html
[2]: https://martinfowler.com/bliki/BeckDesignRules.html
[4]: https://drupal.star.bnl.gov/STAR/book/export/html/5692
[5]: /assets/images/posts/clean-code.jpg
