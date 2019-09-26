+++
title = "The hardest problem in computer science"
description = "It's people, but wait, there's more."
date = 2019-09-25
+++

# The hardest problem in computer science
Here's an old saw I'm fond of (don't know the attribution, sorry):

> _The hardest problem in computer science is people. The second-hardest problem is convincing people that people are the hardest problem in computer science._

I'm certainly not going to solve the former problem in this blog post, but I'd like to make some progress on the latter.

I'd like to state at this point that this post is also basically a summation of my impressions of [The Mythical Man-Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month).

So, _why_ are people such a hard problem? I think the answer has two parts:

1. Co-ordination between large teams suffers from combinatorial complexity;
2. Small teams don't suffer from this problem, but they usually work too slowly to produce valuable software _in an enterprise context_.

This is the hard problem: in a big team, the percentage of time spent co-ordinating between nodes (individuals, teams, organisations) increases polynomially with the number of team members. But small teams aren't the answer, because even though they don't have to devote so much time to inter-communication and co-ordination, there are still generally to small to do all the work needed of them in the time period.

Before I discuss suggested remedies to this problem, I want to spend a little time expounding more upon both parts of the problem itself.

## The problem
### Combinatorial complexity in large teams
lThis is the central thesis of [The Mythical Man-Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month).

proportion of intercommunication and co-ordination increases polynomially
repartitioning work is also work
failing to communicate or co-ordinate 
can elect an intermediary, but often the richness of communication suffers as a result. how often have you wanted to just pick up a phone and talk to a dev on the other side?

### Small teams can't ship in time 
example given in MMM
caveat about start-ups - this is actually in MMM too
what do we mean by enterprise context? necessarily, one in which there are multiple components with which to integrate
example of new nectar

### Summary
We need big teams to ship enterprise projects, but the larger the team is, the less proportionally of its time it can spend doing useful work. A crisis point should rapidly be reached, where the volume of what needs to be communicated becomes so great that no-one can keep up and the choice is either to do no work, or work uncoordinatedly.

It is impressive, however, what can be achieved by a small team. My bias is still towards smaller teams as a means to getting things done, and it seems to me that more work is needed on characterising the limits of small teams.

## Potential remedies
decrease the scope (lean)
clean interfaces
many resonant minds
the goldilocks team?
