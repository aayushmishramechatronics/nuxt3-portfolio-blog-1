---
title: System Design #001 - How to Start with Distributed Systems
description: Understanding Distributed Systems
publishDate: July 1, 2025
date: 2025-07-01
img: "/img/cover\systemdesign.svg"
tags: \["blog"]
---

## WTF is System Design?
Systems Design is the use of CS principles to build large scale distributed systems - 
it involves converting business problems and requirements into technical solutions. 

senior engineers use system design patterns to make reliable, scalable and maintainable systems (and folks like you and me learn from them on how to continue building such systems).
---

## Understanding System Design Primer (using a Pizza)
don't get me started dawg - I'm watching and learning from the OG Gaurav Sen Sir and as he mentioned the example of a Pizza - so I had to use it here too (I gotta be more creative next time)
in his video, he used the example of running a pizza restaurant to explain complex system design concepts like scalability, fault tolerance, and microservices. i'll discuss more about it below - don't leave me here

---
## Fundamentals of System Design Primer 
### 1. **Vertical Scaling**

as mentioned before, imagine you're running a pizza restaurant and you being the manager (or owner - if you're a power-hungry personality)
are thinking of scaling operations by buying more machines - but before buying more machines, try making better use of the ones you already have.

> imagine asking your cooks or chef to work harder or upgrading the oven — that’s **vertical scaling**.
> in system terms, it means increasing the capacity of your current server (CPU, RAM, etc.).

---

### 2. **Preprocessing (Cron Jobs)**

you may expect a huge in-flow of hungry hoggers to feast on your somewhat delicious pizza - so you gotta prepare things in advance when it's not so busy or during non rush-hours.

> like keeping the dough, toppings and sauces ready before the rush.
> now in systems, this is done using **cron jobs** — automating repetitive tasks during off-peak times.

---

### 3. **Backup Servers**

so imagine you being one hell of a penny-saving rat and you employ only one cook/chef to handle your whole orders in the back - but suddenly, what if your only cook/chef falls sick?

> you need a backup cook dawg — same thing happens in tech too.
> and this is where **backup servers** or **master-slave architectures** come in — for redundancy and reliability.

---

### 4. **Horizontal Scaling**

somehow your cranky-looking restaurant serves good pizzas and ofcourse the demands start increasing - what do you do now huh?

> hire more chefs instead of overworking one (stop being a cheapskate ffs).
> in technical-world we term this as **horizontal scaling** — adding more servers or nodes to distribute load efficiently so that you don't let all the load go onto one single server.

---

### 5. **Microservices**

you have multiple chefs now, some are good at throwing toppings on the pizza dough made by some other chef (who's good at dough or whatever you call it) and some chefs are good at saucing the dough 
so what i'm saying is - every chef specializes.

> one makes pizzas, another handles garlic bread or choco-lava cake (uuuwuuu you like it don't you - you filthy animal).
> anyways - we techies call it as **microservices architecture** — breaking down an app into smaller, focused services that talk to each other.

---

### 6. **Distributed Systems**

you want to earn more money and ofcourse you plan to open more branches in different locations.

> this ensures that orders can be served even if one branch is down.
> in tech, this means deploying systems across multiple **data centers** or **regions** for better **fault tolerance** and **low latency**.

---

### 7. **Load Balancing**

now, you opened multiple restaurants at different locations but who decides which branch should fulfill the next order?

> the delivery boy who picks the fastest or least busy one.
> in system design, this is the job of a **load balancer** — routing traffic smartly based on current server conditions.

---

### 8. **Decoupling**

you only worry about how your pizzas are getting cooked and not about getting it delivered - thanks to Zomato and Swiggy that take the worry of order-delivery off your fat shoulders.

> so here, your pizza shop doesn’t care who delivers but you know it'll surely get delivered — and vice versa.
> in tech, this is called **decoupling** — making different parts of the system **independent**, so changes in one don’t break the other.

---

### 9. **Logging and Metrics**

I mean at the end, you still do have to track how long each order takes and where issues occur - because you don't want to take the blame of a cold and stale pizza.

> metrics help optimize the service.
> similarly, in software, you need **logging** and **performance monitoring** to ensure smooth operations and quick debugging.

---

### 10. **Extensibility**

now, you want to start delivering burgers too?

> then your kitchen should be adaptable.
> in tech, this is about **designing extensible systems** — that can evolve with new features and requirements.

---

## High-Level vs Low-Level System Design

i'm sorry - i'm not smart enough to explain this feature in your stupid pizza terms but anyways, in tech there's -
* **High-Level Design** → architecture, data flow, services interaction
* **Low-Level Design** → code structure, class definitions, data models

both are equally important - while high-level gives you the bird’s-eye view, low-level helps you implement it in real life.

```
that's it! these are few fundamental System Design principles - do let me know if you'd like this blog!
```
