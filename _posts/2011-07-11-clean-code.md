---
layout: post
title: Clean Code
redirect_from: /2011/07/11/clean-code/
---

[Clean Code: A Handbook of Agile Software Craftsmanship][1]{:target="_blank"}
is a book that every developer should read at least once in life.

I try to summarize a few ideas from the book:

- #### Meaningful Names

    The first step to writing good code is that names have meaning. The
    variables, methods and classes should have a good name to know why they
    exist and what they do.

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

I did a talk at the Agile Madrid User Group about this book.

<div style="width:595px; margin:auto" id="__ss_8036914"> <iframe
src="http://www.slideshare.net/slideshow/embed_code/8036914" width="595"
height="443" frameborder="0" marginwidth="0" marginheight="0"
scrolling="no"></iframe> </div>


[1]: http://amzn.com/0132350882
