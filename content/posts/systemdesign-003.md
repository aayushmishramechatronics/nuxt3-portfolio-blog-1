---
title: System Design 003 - Load Balancing
description: Learn and Understand in-depth about Load Balancing 
publishDate: July 25, 2025
date: 2025-07-25
img: "/img/systemdesign3.svg"
tags: ["blog"]
---

## WTF is Load Balancing?
To put it in simpler words - "Load Balancing is distributing the incoming network or application traffic across multiple servers so that no single machine gets overwhelmed". Basically, It acts like a “traffic cop” or a host, directing each request to the least busy server, which maximizes intake and keeps response times low.

So by spreading the work evenly, Load Blancers help improve system performance, while ensuring high availability, and prevent crashes under high load. In short, a load balancer ensures smooth, reliable operation by intelligently routing requests to healthy/less-busy servers.

---

## But Why Do We Need Load Balancers?

Let's do a small With v/s Without comparison for Load Balancers to truly understand it's role in Distributed Systems 
**Without Load-Balancing:**
- One server may get overwhelmed.
- Downtime will _increase_ if that server crashes.
- Scaling becomes hard and inefficient.

**With Load-Blancing:**
- Incoming traffic is shared evenly.
- _Fault Tolerance increases_.
- Systems can scale **"horizontally"** (just add more servers!).
- System stays responsive even when one server goes down.

> TL;DR: Load Balancers are the backbone of Distributed Systems. You can’t scale a system without one.

---
## Types of Load Balancers  

Imagine you're at FoodCourt-1 (FC-1) and many people are coming in hungry, and looking for the best seat to grab and enjoy their food. 

And while the students are waiting at the counter, there are helpers (which are acting like Load Balancers) at the entrance - telling people where to go, based on different methods/strategies. So, Let’s meet these helpers (a.k.a Load Balancers):
### 1. **DNS-Based Load Balancer**
This helper hands out a map with one of the many seats marked. Everyone gets a slightly different map depending on when they arrive and it's a good thing because it spreads people around.

But if the map leads to a seat where you're not allowed to sit, then you're stuck with it unless you ask again. So, in technical terms what I meant to say is -

- DNS-Based Load Balancer returns different IPs for the same domain name (like ``example.com`` → Server A or Server B).
- And it is usually _**Round-Robin-Based or Geo-Based**_.
- But there's a small problem, **Problem: "DNS Records are Cached; so Failover is Slow."**

> Think of it like Google giving you directions to a Hotel. It might be wrong if anything has changed since (like the Hotel might be closed long ago or shifted somewhere else).

---

### 2. **Layer 4 Load Balancer = The Traffic Cop**

This helper stands with a whistle and simply waves people left or right based on who’s free — without asking where they want to sit.

- It’s super fast!
- But not smart about where you want to/plan to sit.

So to put it into technical terms - 
- Works at the TCP/UDP level.
- Doesn’t inspect request content.
- Fast and lightweight.
- Decides based on IP and port.

> It just knows to do one thing - “That seat is not occupied. Go there!”

---

### 3. **Layer 7 Load Balancer = The Smart Helper**

Now this is a super-smart helper. When someone comes in, the helper will ask:

```
“Do you want to go and sit in the first floor or be at ground floor?”``
“Do you want the best place to sit?”
```
Then they send you to the exact seat that fits your need. 
- Slower than the Layer 4, but much smarter.
- Can handle complex situations.

So to put it into technical terms - 

- Understands HTTP, HTTPS, gRPC, etc.
- Can inspect headers, cookies, and routes.
- Can route ``/api`` traffic to one server, and ``/images`` to another.
- Useful for content-aware routing.

> It knows you want to sit in the best seat and sends you straight to that seat.

---

### 4. **Reverse Proxy Load Balancer**

Here, you don't even see who cooks your food in the mess.

- You get your food from one counter.
- That counter gets food quietly from any kitchen that’s available.
- The food is brought to you by the same counter.

So to put it into technical terms -

- Clients never talk directly to the backend servers.
- Load balancer takes full control of the client request.
- Examples: NGINX, HAProxy, Envoy.

> Like Swiggy/Zomato — you order once, and they figure out who’s cooking behind the scenes.

---

## Load Balancing Algorithms 

1. Round Robin - Requests are distributed one by one to servers in a loop.
    > Like dealing cards to players.

2. Least Connections - Requests go to the server with the fewest active connections.
    > Like choosing the shortest queue at a grocery store.

3. Weighted Round Robin - Give more traffic to stronger servers based on capacity.
    > Like giving heavier workloads to more experienced chefs.

4. Hash-Based or Consistent Hashing - Requests from the same client go to the same server (session affinity).
    > Keeps “sticky sessions” — useful for stateful applications.

---
## Load Balancer Architecture and Redundancy

- Single Point of Failure (SPOF) - If the load balancer dies, the whole system fails.
- Redundancy Strategies:
1. Active-Passive Load Balancer Setup: Backup takes over if primary fails.
2. Active-Active Setup: Both load balancers are live, with traffic shared between them.

> Always have a second host to seat customers if the first one faints!

---
## Health Checks and Monitoring
A smart load balancer doesn’t just blindly route traffic — it pings servers regularly to ensure they’re up.

- Health checks are done via HTTP/TCP probes.
- If a server fails, it is taken out of rotation.
- Auto-healing: once healthy again, it's re-added.

> You don’t keep sending diners to a table with a sick waiter.

---
## Best Practices for Load Balancing
 - Make backend servers stateless to allow request routing flexibility.
 - Use session storage (like Redis) instead of relying on sticky sessions.
 - Keep load balancers redundant.
 - Choose algorithm based on use case (speed vs. fairness).
 - Combine DNS-based load balancing with Layer 4/7 for resilience.

> Load balancing isn’t just about dividing the load — it’s also about making your system smarter and safer.

---
## Tools and Examples
Some widely-used Load Balancers in production:

- **NGINX** - (open-source L7 balancer + reverse proxy)
- **HAProxy** - (high-performance TCP/HTTP LB)
- **AWS Elastic Load Balancer (ELB)** – supports L4 and L7
- **Google Cloud Load Balancer** – global, scalable
- **Cloudflare Load Balancing** – DNS-based + geo-distribution

---
```
Thank You for Reading this Blog! Written by Aayush A. Mishra - July, 2025
```
