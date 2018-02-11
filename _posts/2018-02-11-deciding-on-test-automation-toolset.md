---
layout: post
title: Deciding on the test automation toolset
tags: [selenium, test-automation]
---


After a small break, I'm back :)!

This time, a general topic related to test automation - deciding on the toolset. It's the first post inspired by a recent poll by Katrina Clokie on Twitter, where she asked if the industry is moving away from Selenium to some of the emerging competitors.

<!--more-->

The poll I mentioned is this one:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I&#39;m seeing competitors to Selenium emerging. What do you think? Is the industry:</p>&mdash; Katrina Clokie (@katrina_tester) <a href="https://twitter.com/katrina_tester/status/959911585132113920?ref_src=twsrc%5Etfw">February 3, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It was really thought-provoking in my case. Not only it made me stop and think about the tool choices around test automation tools, but also made me take a closer look at these Selenium competitors mentioned in the poll. Unfortunately, I ended up with such a long rant that I decided the second part deserves a separate post :).

## About misconceptions

At the moment, a part of my job involves consulting the projects in the company regarding test automation. It includes helping future ones to pick appropriate toolset. This week, I had a few discussions related to that, and that’s why it was a great exercise to revisit my thought and decision-making process around it: what criteria are worth to consider and what people should look after when doing the same. Additionally, at the moment I am reviewing the state of automation in the company, and I get a lot of opinions from people using different tools, which shows various perspectives on the matter.

By the way, I will not discuss budget issues here and will focus mostly on the impact on team experience. Picking tools versus the available funds is a topic for another discussion. I will focus on free, mostly OSS frameworks here. I also assume that team has free will when it comes to choosing the toolset. Just like the budget, I won't discuss a situation where you have to convince the management or the client.

Having competing tools on the market is excellent for us, users. We have alternatives, we have options to choose from. It is also helpful for the tool creators/maintainers, as having competition might lead them to revisit their approach, or tackle a problem from a fresh angle - both sides can benefit from it.

We have dozens of frameworks for UI test automation available, many of them with a well-established community and user bases. There are multiple lists online showcasing them - an example from Joe Colantonio: [link](https://techbeacon.com/6-top-open-source-testing-automation-frameworks-how-choose). Such variety of free tools ready to be picked up: Watir, Selenide, Serenity, Protractor, Webdriver.io. Heck, even my company created one (Bobcat), just like many other teams and organizations across the world. (At the time of writing, not a tool per se, but an additional bootstrap has become available: [link](https://github.com/edinc/java-selenium-framework)). 
One thing worth noting here: when trying to pick a tool, investigate if it's actively maintained or is it easy to find someone that could answer a related question. It is worth to make a proof-of-concept run, to try and discover the majority of possible problems you might run into. I'm still looking for a perfect benchmark to achieve that quickly - let me know if you have an idea of one :).

All frameworks mentioned above have a common denominator: Selenium used as its basis.

And people tend to say a lot of shit about Selenium.

My feeling is that they do that even more often recently. Perhaps since these competitors arrive and the way they describe themselves, i.e. ‘heavens forbid, not using Selenium under the hood!’.

Let’s get one thing straight. Selenium is not a framework that you can grab off the shelf and jump right into testing. You CAN do it, but it is not a complete solution. And you know what? The Selenium folks do not advertise themselves like that. Just read the first paragraph from SeleniumHQ site:

>
Selenium automates browsers. That's it! What you do with that power is entirely up to you. Primarily, it is for automating web applications for testing purposes, but is certainly not limited to just that. Boring web-based administration tasks can (and should!) be automated as well.
>

Selenium is a browser automation framework. ‘That’s it’! Not a full-blown test solution. Not a swiss-knife to meet all your needs. Not a silver bullet for all your problems.

It has its own quirks, just like every other tool out there. It makes it way easier to wrap its API with your own methods, to make it more useful to you and your team. To adjust it to your needs. Hell, why do all these tools out there exist? That’s the exact reason - they try to make your life easier, jump-start your automation effort, provide useful utilities, so you won’t have to create them from scratch.

If you pick vanilla Selenium bindings for your language, you have to realize that it will require some effort from you. It doesn’t mean it will take months - in fact, if you know what you are doing you can have tests running within minutes even in this case. In the JVM realm:
- grab a build tool like Maven/Gradle
- throw in a test runner such as JUnit/TestNG
- add Selenium dependencies
- download the driver for the browser of choice (assuming you have a browser installed already)
- throw in a few lines of code of a Selenium ‘hello world’ equivalent. 
Voila, you have your tests set up. It’s now even more straightforward with tools like Zalenium or Selenoid out there that considerably simplify the infrastructure part.

There are zillions of resources available online that will help you do that. I admit that we all could do a better job at pointing newbies in a right direction - I see a lot of people struggling with starting with test automation and getting crushed under all that knowledge.

But since when the setup time is an actually valuable metric while picking a test automation framework?

And it is one of the arguments in some of the replies under Katrina’s poll (in favor of Cypress in this instance). Plus, I often hear on different forums that Selenium takes a tremendous amount of time to configure as one of the complaints.

If you are like '3-2-1-ALL RIGHT WE HAVE A FRAMEWORK-LET’S AUTOMATE!', you are making your first mistake.

Test automation is, surprise-surprise, a regular software development. Do you see your team doing the same with the actual application you are about to test? Maybe when prototyping stuff, sure (if you are actually developing software in general like that, I send virtual hugs, light a candle for you and just hope you are not making something others will use). No, if you are developing software with at least a grain of responsibility, you plan things out, try to design different aspects before going ballistic on the code.

Also, the better programmer you are, the better the results. Do you see junior devs playing the role of an architect? Why would you do the same with a test automation framework and expect something different? When setting up a new tool, don’t be afraid to ask others for help and to assist you, you’d be surprised to discover how helpful people might be.

The framework setup time is probably the least of your concerns. Plus, there are things like CI integration, test infrastructure, etc. that you also need to worry about beforehand.

This leads me to my next point - overall approach to test automation and how it relates to the tools you choose.

If you are treating it as a second-class citizen from the start, a side gig in a project, your results probably will not be something that you will be proud of. 

If you do not have a proper process around test automation, it really doesn’t matter which tool you pick. Sure, one can be easier to use than another, at least basing on the shiny example in the README. But when you don't have some healthy practices in your mind (and a lot of smart people are talking SO MUCH about them), you will utterly fail.

Tools do not solve problems. They can only assist you in that.

People often forget about this simple rule and when they do not care about the quality of the code, do not prepare a suitable automation strategy or processes within the development team, they end up blaming the tool.

Which ends up in, e.g., people shouting ‘SELENIUM SUCKS’ left and right.

‘Selenium tests are flaky’! ‘My builds are unstable AF’! ‘It takes ages to set something up that actually works’! ‘Maintaining my tests takes years’!

Sounds familiar? Been there? I’m not ashamed to say that I was. And I am still learning.

If you do not treat test automation well, why are you expecting miracles? Your tests and processes are crappy or non-existent, you accumulate technical debt faster than Bitcoin gained value last year… but it’s the tool’s fault, right?
There is a really, really high chance that if you are saying things like the above you are trying to use a spoon to hammer nails. One made of plastic, to make matters worse. On top of that, in some instances, you should leave those nails alone in the first place because the tests you want to write should be done on a different layer.

Or maybe your application under test or the underlying infrastructure is terrible, and you do not want to admit it? Many times I saw days of wasted effort to come up with more and more sophisticated ideas how to overcome crazy, nondeterministic behaviors of the application in the test framework, when the problem was, in fact, straightforward: the app was running on a potato. Tests were doing what they were meant to do - they yelled about the problem. Very, very loud.

There are tons of articles, blog posts, podcasts, videos, courses and whatever other kinds of knowledge sharing exist that you can use to improve your approach to test automation. Take care of it first, prepare an early form of a strategy you would like to establish in the project, then choose your tools.

## Things to take into consideration

What other factors to include when picking your automation tools?

First of all, it is crucial to understand the context of the team that will use them. For example, can they afford the risk of using a less common tool, one that hasn’t been applied anywhere within your organization? 

When you are a part of the team and an automation specialist, it is easier to grab something entirely new and experiment - your experience should outweigh the problems you might encounter. But for less battle-hardened folks left without such support, a situation where you offer them a tool they will have to work out on their own might be equivalent to throwing them a grenade, hoping it won’t go off. The potential need for external support versus the actual availability of such is something to keep in the back of the head here.

Remember that a specific framework might seem like a straightforward solution. Even a quick proof-of-concept can indicate that’s the way to go. For simple cases, it doesn’t really matter what kind of tool you are using. It’s about those edge cases that you will inevitably reach at some point of the project, probably the faster, the more complex the application is. Waking up late in the development and realizing you are blocked or significantly slowed down and there is no possible workaround is not a situation you want to be in. It might be impossible to find time or budget to fix such problem.

Also, try to look at the tool from a newbie's perspective. You may have tried out dozens of them before, but will your team pick it up as quickly as you? Is the learning curve steep and will you need to support everyone a lot at the beginning? Do you have time for that?

Next question is related to the experience too - what about the skillset of your team? What about the programming language you will be writing in?

Jumping to a Java-based framework, where there’s only a single Java developer in the team, surrounded by an army of front-end devs, armed with all these freshly-baked, week-old JavaScript frameworks might not be a good idea to go with. Take into consideration what people are comfortable using. Also, the more people familiar with the language, the more and faster you can learn from them.

The next important thing is the AUT itself. What will you be testing? What layer will you have to focus on the most? Do you actually need that extremely customizable, utility-filled framework when you need to write only a few tests in it?

What about the processes, the development approach of the project? Your organization might have worked with particular toolset before, but are the surrounding conditions the same? Evaluate what made them successful previously and try to judge if you can repeat their story.

In the end, there is always the innovation part. Even when you have established a proper culture around test automation, everyone is comfortable using your standard toolset, then comes a time while starting a new project you feel this urge to try something different this time. To innovate. To change the status quo. Or just for shits and giggles - having fun when working will make you a happy person. Perhaps that can also be the way to enliven your team and turn their eyes to test automation?

## Summary

Summing the above rant up, when picking test automation toolset - like with anything testing-related - understand your context: 
- Needs: what kind of tests will you write the most? How many of them? Do you expect a lot of unknowns and a need for customization?
- Team: what skills does your team possess? What language are they comfortable using? Will you have to focus on people rather than the tool itself?
- History: investigate your organization’s past with tools-candidates: what made them successfully applied before? What caused them to fail previously? Can you identify conditions that made it possible and relate your current situation to them?
- Risks: do you need to worry about process-related stuff? Do you have room for experimentation or should you stick with safe alternatives?
- The tool itself: is it actively maintained? Can you receive support easily? Is the documentation sufficient? Did you see an empirical proof it works before recommending it, or your knowledge is purely theoretical or based on others' stories?


All in all, when advising people and helping them pick a framework, do not make the decisions for them. Empathize with the team. Present all the options, their pros, and cons, tell them how others used it, what problems they have faced and if they enjoyed using it (taking into account individual biases). Don't force them to anything and make sure it’s a joint decision - test automation should be owned by the whole team.

Remember, there are no silver bullets. You saying “XYZ IS THE BEST, USE IT!” won’t change that.

<hr/>
As I mentioned at the beginning, this is the first post on this topic - the next one will be a closer look at Selenium competitors mentioned in Katrina's poll.

Till next time!