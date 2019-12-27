---
id: if-containers-are-the-answer-what-are-the-questions
title: If Containers Are the Answer, What are the Questions?
author: Oscar Barlow
tags: [containers, oreilly, distributed systems]
---

Answering the titular question has two components. First of all, if you don’t know what a container is, then the short article [What are containers and why do you need them?](https://www.cio.com/article/2924995/what-are-containers-and-why-do-you-need-them.html) (CIO.com - beware a slightly irritating regwall) should help.

<!-- truncate -->

OK, now that we’ve grasped the concept of containers, perhaps we can move on the second part: what kinds of problems to containers solve?

I should qualify at this point that I’m a fairly green developer. I left bootcamp in February 2017, got my first professional coding job in April 2017, and it is now March 2018. I’ve been a ‘real’ coder for slightly less than a year.

I’ve basically never written software for a _non_-distributed system. Therefore, I don’t conceptually know what motivates the user of containers rather than, say, virtual machines. I also don’t have the experience of trying to solve the problems that distributed systems using containers solve, without using containers!

So I found the free eBook [Designing Distributed Systems](https://azure.microsoft.com/en-gb/resources/designing-distributed-systems/en-us/) by Brendan Burns, one of the cofounders of the [Kubernetes](https://kubernetes.io/) project, worth my time to read.

In particular I’d say the earlier chapters are most useful if you are new to the subject, as I am. In them Burns provides a brief history of describes the motivations for distributed systems (scalability and reliability) and for writing this book (to make distributed systems engineering less of an arcane art and more easily accessible).

The subsequent chapters of the book directly address the question I posed in the title of this blog post, by presenting a series of ‘patterns’, i.e. generally applicable solutions to common problems in distributed systems engineering.

If you’re around about my level of my experience, I’d recommend giving close reading to Part I. Single-Node Patterns, and then skimming the rest of the book. This section particularly describes solving problems relating to legacy systems without completely rewriting them. Code samples are provided, and worth studying. As the patterns proposed are relatively simple, this section is a good way to introduce yourself to the concepts of systems using containers and container orchestration, without worrying overly about the ‘distributed’ part.

Parts II and III relate more to increasing the reliability, scalability, and performance of production systems using patterns such as stateless replication, and scatter/gather computing. I found these sections more worth skimming more than deep reading. I look forward to returning to these sections one day when I’ve a little more experience of the kinds of production problems they solve!

## Conclusion
As always, when an author proposes a pattern, it’s more valuable to understand the motivations behind the common solution than it is to memorise the pattern. The attention to these motivations is what I found particularly useful about Designing Distributed Systems.

It’s a free eBook and will probably cost you 2–3 hours to do a mixture of reading and skimming. Of course, the more you read, the more time it’ll take.

Get it [here](https://azure.microsoft.com/en-gb/resources/designing-distributed-systems/en-us/).