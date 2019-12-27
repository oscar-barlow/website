---
id: 5-things-i-learned-first-half-makers-academy
title: 5 things I learned in the first half of Makers Academy
author: Oscar Barlow
tags: [makers, bootcamp, learning]
---

The axioms in the blog post below came after ‘penny-drop’ moments — where something I’d heard, or been told, really sank in.

Hopefully you’ll see that all these axioms are related. They look like five things, but really they’re all the same thing. Happy reading!

<!-- truncate -->

## 1. The best measure of progress is ‘learning velocity’
There’s a concept in agile software development called velocity. In short: progress should be defined as units of work done over a particular time interval (let’s say a week).

Any given feature may _seem_ relatively simple to the user, but it might actually be incredibly complex; in other words, it constitutes many units of work. So in some contexts, a more useful way of thinking about progress is work units completed, rather than features delivered.

This is also a useful way of thinking about your learning. Each week and weekend at Makers you get set a challenge, a web app to make. For example, in week 6, my team and I made an Airbnb clone.

Often you won’t finish. At this point the tendency is to panic — _I’m falling behind!_ — and to rush through the rest of the project (about which: see below).

I want to propose that instead of measuring your progress against completing the project, you measure your progress in terms of _learning units completed_. This isn’t an original idea, but I think it’s useful here. Some examples:

* You didn’t complete any features today **BUT** you did get a sense of when an object has too much responsibility, and refactored to a better design.
* You only completed the sign-up feature today, **BUT** you really got your head around encrypting a password with BCrypt, roughly how it works, and why it’s so important.
* You just basically recreated an app you’ve already made, in another language. You didn’t deliver anything new, **BUT** you learned tons about e.g. the differences between JavaScript and Ruby — both conceptually, and what it means to you practically as a developer.

This kind of learning you will stand you in good stead for years to come; the apps you’re making are basically schoolbook exercises. So if you want to gauge how well you’re doing, look at how much you’re learning — not at how many challenge steps you’re completing.

At the end of each day, look through your commits. Use that to stimulate your thinking, and write a bulleted list in your journal of all the things you learned that day. Dan uses his [daily blog](https://medium.com/@pelensky) for this; I like pen and paper.

It comes to the same thing: it feels good (and helps combat [impostor syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome)), in addition to reinforcing your learning.

## 2. Rushing doesn’t save you time
I mentioned rushing through a challenge earlier, and promised I’d pick that thread back up. That’s what I’d like to do now. Picture this:

> An excited hubbub surrounds you. People occasionally whoop and high-five, having just **aced** the user story they were working on and pushed to Heroku. Your peers are discussing intricate technical specifics as casually as they would the weather; you have to concentrate intensely to get anywhere. They’ve nearly finished the challenge; you’re plodding along.

At this point, it is immensely easy to panic, stop writing tests, code the first thing that comes into your head and start copying and pasting wholesale from Stack Overflow.

These bad decisions will get you through a few challenge steps, but the thrill of success will soon turn sour.

Pretty soon you’re going to hit a problem that you don’t understand. It’ll take you an hour or so to understand it, and by the time you have, you’ll realise that _that_ particular piece of code — probably the one that ties the whole application together — doesn’t work how you thought it did. Because everything depends on it, you’ll have write pretty much the whole application to get it fixed. Kiss the rest of the day goodbye.

I want to make a distinction at this point between struggling in isolation and rushing. If you’re stuck and you’ve exhausted all your [problem solving techniques](https://blog.makersacademy.com/how-i-solve-problems-a6a84d167598), by all means get the help you need to move on.

On the other hand if you’re worried that you _should_ be further ahead of where you are, and you’re tempted to kind of skip over some things to catch up with the herd, then beware. You’re creating problems your future self will not thank you for.

Short cuts make for long delays. Trust me, I’ve been there.

## 3. Don’t put it in your code if you don’t know how it works

[Kim](https://medium.com/@k.wilson541) was reviewing my [Takeaway Challenge](https://github.com/makersacademy/takeaway-challenge/blob/master/README.md) the Monday after I’d completed it. I’d fudged a way to SMS order notifications (and to test it), and Kim had correctly picked up on it. We wanted to improve it, but we got an error we just couldn’t understand.

I called over [Roi](http://www.roidriscoll.co.uk/), my cohort’s coach, who glanced over the code. “Mm-hmm,” he said, “and how does this bit work?”

Well of course I had _no frigging idea_. I’d found a horrendously complex implementation somewhere online, copied and pasted it into my code, and been satisfied when it behaved how I wanted it to.

This third point is kind of an amalgam of the previous two. I’d focused on completing the challenge, not on learning how to use and test an external API. After a while (and, I add with shame, without exhausting my problem-solving techniques) I’d copied and pasted a solution so I could rush over the finish line. Of course it came back to bite me!

Even though it’s kind of a restatement, I think it’s worth giving it its own space: while you’re a learner, don’t put it in if you don’t understand it. There’s no point; it’ll cause problems later, plus _understanding stuff is what you’re here for_. Skipping what you don’t understand is self-defeating.

## 4. Learn when something smells irrelevant
Sit down, I’m going to astonish you: there’s a lot of outdated, irrelevant, and just plain wrong stuff on the web.

When you’re learning coding it is really, incredibly valuable to get a sense of whether a particular page has a valuable nugget of information or is a total waste of time. Learn to skim, extract the relevant information (if any), and move on.

I’ve developed a few rough heuristics to help me figure out it if a page useful — if it smells helpful or irrelevant. But really, the best way to know if something will help you solve your problem is to have a really clear idea of what your problem actually is…

## 5. Learning to code == debugging == problem solving
As I was coming to grips with JavaScript in the bowling challenge, I had a failing test where I was comparing two arrays , and I couldn’t figure out why.

I’d like to give it as an example because I think it ties everything up nicely. Rather than worrying about completing the challenge, I slowed down and took the time to figure out what was going on (2). I could have borrowed something from elsewhere to get my code working, but having previously been bitten (3) I chose not to! I did a bit of Googling, skimmed some Stack Overflow stuff from a few years ago but rapidly decided it was useless. I drew up a [couple of hypotheses for what my problem might be](https://blog.makersacademy.com/how-i-solve-problems-a6a84d167598#.aa9gc27fv), which helped me to hone in on the relevant materials: [Mozilla’s JS docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (4).

I asked myself: does `===` work how I think it does? Yes, it does. Well then, that scrubs that hypothesis off the list. In that case, what about the actual things I’m comparing?

It turned out that data types in JavaScript don’t work how they work in Ruby. What I thought I was doing was comparing data; what I was _actually_ doing was checking if one object was exactly identical to another object\*.

Understanding a fundamental difference between JS and Ruby? That is one HUGE learning unit! Chalk that up as a victory for (1).

In debugging my test, I had solved my own problem — which, as an aside, made me feel _totally brilliant_—and I had made a pretty important step in learning to code (5).

\*(not totally accurate but for the sake of brevity let’s go with it)

\*\*\*

Well, that’s it! Hopefully I’ll have gained a few more pearls of wisdom in six weeks. Stay tuned.

There’s one source I’ve referred to over and over in the course of this post, and I think it’s worth drawing attention to it as a separate item: [How I solve problems](https://blog.makersacademy.com/how-i-solve-problems-a6a84d167598#.nx7dp5rcd) by [Sam Morgan](https://blog.makersacademy.com/@sjmog1) on the Makers Academy blog. In terms of lightbulb moments, this was a big one.

Another resource that I’ve not referred to explicitly but which was nonetheless very useful was [How do I ask a good question](https://stackoverflow.com/help/how-to-ask)? from the Stack Overflow docs. I’m going to go out on a limb here and say that this is perhaps the most useful resource on Stack Overflow, and you should definitely read it. It will help you solve your problems _even if you never ask a question on Stack Overflow_. Seriously. Well worth your time. Read it 👍