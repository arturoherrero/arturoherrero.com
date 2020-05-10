---
layout: post
title: Mental models, complexity and software
description: I was invited to speak at Pamplona Software Crafters 2018.
---

I was invited to speak at [Pamplona Software Crafters
2018][1]{:target="_blank"}, and I'm glad to have contributed with my talk about
mental models, complexity and software.


### Software is complex

There are several ways in which we can approach complexity from a developer's point of view.

For example, we can look at it from the perspective of **computational
complexity** (big O notation) or the perspective of **programming complexity**
(cyclomatic complexity, ABC metric or cognitive complexity).

We can also think of complexity in terms of **[accidental complexity vs.
essential complexity][2]{:target="_blank"}**, and the difficulty of handling
states in object-oriented programming compared to functional programming.

And of course, **the lifecyle of a software project** involves significant
complexity as well; software teams, repositories, continuous integration, testing,
deployments, monitoring, alerts, methodologies, etc...


### The world is complex

However, if we think beyond software development, we can find
complexity in everything around us, much of which we don't yet understand. And
we may think that chaos is order yet undeciphered. The history of humankind is
the history of understanding the world and doing reverse engineering to try to
understand that chaos. We are **[driven by compression
progress][3]{:target="_blank"}** to try to decipher the world and uncover the
simplicity that we believe is underneath all the chaos.

This is something we also look for when programming in increasingly higher
level languages. For example, this Ruby on Rails line expresses something on a
level easily understood by anyone, hiding many of the details that occur by
convention or in layers of abstraction below it. We can understand **code as
compression progress**.

```ruby
User.create(name: "Arturo")
```

We like to come up with **abstractions that hide the details**, but complexity
is not free. **It increases the hidden risks and the fragility of the system**.

I believe the solution is not simply to understand one level below your normal
abstraction layer, but also to understand one level above it.


### Mental models

**A mental model is a concept, a framework or a vision of the world that you
carry in your mind to help you interpret what surrounds you and understand the
relationship between things**.

The software craftmanship community have a clear idea of what mastery is, taken
to the extremes by the inspiring [Jiro Dreams of Sushi][5]{:target="_blank"}
documentary. However, I am also interested in the idea of mastering a
specialization yet also having a broad understanding of many other disciplines.
This is known as having **T-shaped skills** or being an **expert-generalist**.

At the end of the day, we can understand [multiple mental models][6]{:target="_blank"}
from Charlie Munger as a collection of big ideas from big disciplines that contains
a checklist for decision-making. You can explore some of them in this infographic of [the
top 12 most useful & universal mental models][7]{:target="_blank"} by Michael Simmons.


But, **why should you care about mental models?**

- They help you see the world more accurately and make better predictions of the future.
- They can help you come up with more innovative ideas.
- You can build more and better connections with people who are different
- You can increase (self-)awareness.
- They provide ways to work more collaboratively by understanding your coworkers.
- They also provide ways to improve yourself so you can be more effective
{: .element-related }


### Summary

1. The world/reality is complex
2. We're driven by compression progress
3. Complexity is not free
4. Mental models

> Remember, always, that everything you know, and everything everyone knows, is
> only a model. Get your model out there where it can be viewed. Invite others
> to challenge your assumptions and add their own.  
> – Donella H. Meadows


### Bibliography

- Thinking in Systems: A Primer. *Donella H. Meadows*
- Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger. *Charles T. Munger*
- Sapiens: A Brief History of Humankind. *Yuval Noah Harari*
- The Gene: An Intimate History. *Siddhartha Mukherjee*
- Why Information Grows: The Evolution of Order, from Atoms to Economies. *César Hidalgo*
- Organize for Complexity: How to Get Life Back Into Work to Build the High-Performance Organization. *Niels Pflaeging*
- Antifragile: Things That Gain from Disorder. *Nassim Nicholas Taleb*
- Skin in the Game: Hidden Asymmetries in Daily Life. *Nassim Nicholas Taleb*

<div class="iframe-container iframe-443">
  <iframe src="https://www.slideshare.net/slideshow/embed_code/key/bKchRh0iIDMIJO"
  width="720" height="443" frameborder="0" marginwidth="0" marginheight="0"
  scrolling="no"></iframe>
</div>


[1]: http://2018.pamplonaswcraft.com/
[2]: http://curtclifton.net/papers/MoseleyMarks06a.pdf
[3]: https://arxiv.org/abs/0812.4360
[5]: https://youtu.be/Q3Ve7ec1HpY
[6]: https://www.fs.blog/mental-models/
[7]: /assets/images/articles/mental-models.jpg
