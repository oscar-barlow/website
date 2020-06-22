---
id: data-engineer-scorecard
title: A data engineer's scorecard
author: Oscar Barlow
tags: [data, data_engineering]
---

I wanted to set out the portfolio I think, constitute a data engineer's skillset. For the title of this post, I've borrowed the idea of the [balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard), interpreted in this case as building and maintaining a range of skills. I'm also focusing for this post purely on technical skills - for this blog post at least, I'm ruling the interpersonal, communication, and introspective skills you need to be a good engineer/citizen/human out of scope. I think you can call yourself a data engineer if you don't have all of the skills I describe below, and in fact I suspect 2 of them (software engineering + database design) are the core.

<!-- truncate -->

As an organisation starts to become excited about the possibilities of exploiting the data it holds internally, and wants to hire data scientists to start getting at all that tantalisingly close insight, it often discovers that a lot of work is needed to get its data into good shape, i.e. some data engineering needs to be done. Alas, the core skills of many people who identify themselves as data engineers oten are: SQL and beginner-level Python. Not that these are to be sneered at: SQL's important, and everyone's got to start their learning somewhere.

But this skillset is not up to the challenge of building [reliable, scalable, and maintainable](https://www.amazon.co.uk/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321) data-intensive systems. Setting these thoughts down on paper is my way of showing what kind of a skillset is up to this challenge - in other words, what I think a good data engineer looks like.

## (Dev)Ops
It's worthwhile for anyone who builds software of any sort to get interested in [DevOps](https://en.wikipedia.org/wiki/DevOps), for the liberating and accelerating effect it can have on you and your team. This is one of the reasons that data engineers should have some DevOps skills.

The other reason is that much of the time when you do data engineering work, the data you're wrangling originate in systems your organisation controls. Consequently, understanding how these systems operate - what they run on, their strengths, quirks and limitations - means adding valuable context to your understanding of your data.

## Architecture
I once worked on a system that used [SQL injection](https://searchsoftwarequality.techtarget.com/definition/SQL-injection) to run complex, computationally intensitve algorithm against data held in a database (the system had other flaws, but I'll spare you).

This is the reason for my skepticism about people whose core technical skills don't extend far beyond SQL, doing modern data engineering. People naturally want to solve problems with the tools they're familiar with - and if you have a deep familiarity with SQL, and pretty much only SQL, then you'll try to solve pretty much every problem with SQL. Even when you really, really shouldn't.

Modern data systems and pipelines usually involve mixing a bunch of cloud computing components with application code and SQL (which remains important!). This means you need to understand how to do architecture well, because you're going to need to make architectural decisions.

Conversely, without an awareness of the diversity of ready-to-rock tools out there and their appropriate use scenarios, you'll end up building an elaborate, expensive [footgun](https://en.wiktionary.org/wiki/footgun).

## Software engineering
Consider a time when data engineering work mainly meant working in one, giant, proprietary system. My friend and colleague [James Dowdall](https://www.linkedin.com/in/james-dowdall-52250438/) once described what this means, _vis_ web engineers' and data engineers' respective skills and mindsets.

For web engineers, writing code to solve your problems (yours, your team's, your organisation's) is part of what you do. Shell scripts, internal CLI appliations, perhaps internal-facing web applications. For data engineers working in a vendor's walled garden, it is not.

Can you write code that other people can understand and extend? Can you express your motivations for designing your code one way rather than another? Can you be sure that your code does what you think it does? Do you share your code, and can you collaborate on it effectively?

Data engineers who want to work on cloud-based projects which use open source tech and which mix in cloud computing components, application code, need to be able to do this.

## Database design & use
By which I mean, how you structure tables, schemas, and so on within a database, not how the database itself works. At least a glimmer of the alternative ways of doing enterprise data modelling is desirable. How you choose to store your data will affect how easy it is to use the data. A competent data engineer should have some knowledge of the trade-offs involved in structuring a database one way rather than another.

I haven't given much space to this set of skills, beyond emphasising the importance of SQL, which I'd consider to sit in this category. When I start rejecting data engineering interview candidates for reasons like 'dearth of SQL knowledge, never used a database' I'll consider rewriting this bit. Until then, I think we're good.

## Data science & analytics
Data scientists and business analysts are your users, and like I said in my [personal engineering principles](/my-personal-engineering-principles) blog post, stay close with your users or go home. I'm certainly not suggesting that you need to be/have been a data scientist or analyst to be a good data engineer - that's far too great an demand. You could instead think about this as complement to the DevOps section. If you do a little analytics work, you'll have a better feel for what your customers need.

## Conclusion
Let's make explicit a latent theme of this post: _data engineering is software engineering_, and a lot of what makes you good at other types of software engineering makes you good at data engineering too. I'd argue that because of how modern data engineering works - I've characterised it as a mishmash of cloud computing components, application code, and database/data warehouse work - skills that take you deeper into the stack are perhaps even more important to you as a data engineer than they are to, say, a web dev.

Perhaps I'll also venture to make a distinction, and coin a new term? If you can do software engineering well, and you are good at designing and using databases, you're a data engineer. If you have skills in all of the categories I've described above - you have a balanced data engineering scorecard, that is - then you are a _full stack data engineer_. I'm playing off the idea of a [full stack web developer](https://www.quora.com/What-is-the-difference-between-a-Full-Stack-Developer-and-a-Full-Stack-Engineer). For data engineers, the stack is different than for web engineers, very noticeably on the consumption end. Hopefully this term, concept and blog post have some use in categorising your abilities, and allowing you to think about how you can balance your data engineering skills scorecard.