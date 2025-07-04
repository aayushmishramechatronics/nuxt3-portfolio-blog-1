---
title: System Design 002 – Horizontal v/s Vertical Scaling
description: Understanding the Fundamental Scaling Strategies in System Design
publishDate: July 3, 2025
date: 2025-07-03
img: "/img/systemdesign2.svg"
tags: ["blog"]
---

## WTF is Scaling?

consider you're designing a system for some web or mobile application, so when you're building modern applications — especially those that have to live in the **Cloud** — one of the first challenges you’ll face is how to handle growing traffic and data; this is where the use of **Scaling** comes to play.

to put it in simple words, **Scaling** refers to - the ability of your system to handle increased load (or site traffic), whether it's from more users, more requests, or more data.

now, Scaling usually involves **2 Primary Strategies** and that being:

* **Vertical Scaling** (Increasing or Up Scaling)
* **Horizontal Scaling** (Branched or Wide Scaling)

and just like any other system in this world - these 2 Primary Scaling Systems also have some pros and cons, and knowing when and how to use them is key for designing **reliable and efficient systems (so that your system doesn't end-up crashing)**.

---

## WTF is Vertical Scaling?

I'll be straight-forward here, Vertical Scaling means **increasing the power of a single machine or designing a single system with more efficient performance than multiple systems combined** — that is possible by adding more CPU, RAM, or storage to an existing server and make it more capable.

> think of it like upgrading your laptop: more RAM, faster processor — same device, just better performance.(basically you can consider the example of a GPU too - not to mention NVIDIA's RTX Series)

using Vertical Scaling is a common starting point for small applications because it’s:

* **simple to implement** as it's all a one-man game
* **cost-effective in the early stages** because of-course you don't have to handle or look after multiple machines or servers, a single-server system is handling the whole business here
* **requires no changes in your application architecture**, like using multiple servers or machines may require constant updates in the system architecture

### Example:

> if your application is hosted on a Virtual Machine (VM for short) with 2 vCPUs and 4GB RAM, scaling vertically would mean switching to 4 vCPUs and 8GB RAM.

---

## WTF is Horizontal Scaling?

Horizontal Scaling means **adding more machines or servers** to your system and distributing the load among them.

> just think of it as hiring more team members to divide the work, instead of making one person work overtime.

Horizontal Scaling is only needful when:

* you expect high traffic or fast growth on your system
* you need high availability and redundancy to avoid system crashouts
* you want to scale without hitting hardware limits - free space is needed to avoid latency

### Example:

> instead of upgrading one server, you spin up 3–5 servers and place them behind a **load balancer** which distributes user requests evenly.

---

## Comparison - Vertical v/s Horizontal Scaling

let’s look at how these two approaches compare:

| Feature             | Vertical Scaling         | Horizontal Scaling                  |
| ------------------- | ------------------------ | ----------------------------------- |
| **Better Known As** | Increasing or Up Scaling | Branched or Wide Scaling            |
| **How it Works**    | Upgrade the Existing Machine | Add More Machines - Widen Out   |
| **Cost**            | Initially Cheaper        | More Expensive                      |
| **Complexity**      | Easier to Manage         | Requires Load Balancing, Networking |
| **Scalability**     | Limited by Hardware      | Virtually Unlimited                 |
| **Fault Tolerance** | Single Point of Failure  | High Availability                   |
| **Use Case**        | Small to Medium Apps     | Large-Scale, Distributed Systems    |

---

## Advantages of Horizontal Scaling

1. **High Availability**
   if one server fails, others can continue serving users — there’s no single point of failure.

2. **Flexible and Scalable**
   you can add or remove servers on-demand depending on traffic or load and while this happens - other servers continue to perform without any interference.

3. **Better Performance at Scale**
   each server handles a portion of the load, making response times faster and more reliable.

---

## Advantages of Vertical Scaling

1. **Cost Effective (Initially)**
   upgrading one server is cheaper than managing multiple servers.

2. **Simple to Implement**
   no need for load balancers or complex networking as it only involves a single-server.

3. **Easier Maintenance**
   managing one powerful server is often easier than managing a cluster of servers.

---

## Disadvantages of Horizontal Scaling

1. **Complex Architecture**
   requires **load balancers**, **service discovery**, and sometimes **distributed databases**.

2. **Higher Costs**
   infrastructure costs increase with more machines, along with higher DevOps overhead.

3. **Synchronization Overhead**
   keeping data consistent across nodes becomes challenging.

---

## Disadvantages of Vertical Scaling

1. **Limited Growth**
   there’s a hard limit to how powerful one server can become.

2. **Single Point of Failure**
   if the server crashes, the entire application gets fucked up.

3. **Downtime During Upgrades**
   hardware upgrades may require system downtime or restarts.

---

## In Summary

understanding the difference between **horizontal and vertical scaling** is critical when designing systems that need to grow - especially in the case of social media apps.

## Key Understandings - 
* use **Vertical Scaling** when starting small, for quick wins, or when your system doesn’t need to handle a massive user base.
* use **Horizontal Scaling** when your application needs to be **highly available**, **fault-tolerant**, and **infinitely scalable**.

a well-designed system often starts with vertical scaling and later evolves to use horizontal scaling as demand increases, so knowing **when to scale and how** to do it properly is what separates good system design from a great system design.

```
Thank You for Reading - This Blog has been written by Aayush Mishra for - Blogspot!
```


