---
title: KintoHub - A New Player To Open Source
author: Benjamin Apprederisse
author_title: Director of Engineering @ KintoHub
author_image_url: https://miro.medium.com/fit/c/262/262/1*_OH8W1ii8dsVqRyrHZ7iiw.jpeg
description: KintoHub - A New Player To Open Source
image: https://www.kintohub.com/img/kintohub-og.png
---

Following the [recent announcement](https://www.kintohub.com/blog/2021/02/12/KintoHub-Team-Joins-Cash-App) of KintoHub’s team joining Cash App, here are some thoughts about why and how we made KintoHub open source.

<!--truncate-->

In January 2020, we faced a pretty big challenge while marketing KintoHub: the platform we had spent 2 years developing was too complex to use for most developers. We had a powerful platform that developers could use to build and deploy their whole stack — from frontend to backend to database — and allowing them to manage multiple environments from development to staging to production. But they were not able to use it without the team‘s guidance.
After years of effort, we realized that developers do not care for stability or desire complex features. Developers need simplicity in the world of Kubernetes. In our case, developers just want to deploy a repository. That’s it, really! KintoHub ended up being the exact same problem as the problem it was trying to solve… A super promising technology but extremely complex to try so people just give up? 10 letters? Kubernetes?!

After 2 months of research, in March 2020, we took the big decision to restart the project from scratch. We literally restarted it at the whiteboard (if you are interested to learn more about it, you can read Coop’s article [here](https://blog.kintohub.com/from-whiteboard-to-surprise-retrospective-600e68f292c7)) and we did it with only one thing in mind: “keep it easy-peasy, from tech to product”. That basic rule is why the team has been motivated and inspired to make Kubernetes easy for developers this entire time. Basically, if Kubernetes is a platform for DevOps engineers, then KintoHub would be a platform for developers.

But during the next 6 months, we strategically decided to build a SaaS solution while developing our codebase to be simple, clean, and ready to be open-sourced at some point. The hard reality caught up with us when we realized it won’t be possible to juggle both a SaaS and open source simultaneously and we opted, as a business, to focus on users versus GitHub stars. KintoHub 1.0 was our last attempt at creating a SaaS platform and getting as many users as possible with a primary key performance indicator (KPI) to get as many users to successfully deploy their repositories.

This led the team to build features allowing users to register and sign in to their account, allowing them to deploy their service into different regions, allowing them to directly connect to Github, etc. But while all those features are great for a SaaS platform, they add unnecessary complexity to an open-source developer tool.

But it worked, users registered and successfully deployed their repositories on KintoHub! By August 2020, we increased our success rate by 90% compared to the previous versions in 2018/19

Today, with KintoHub Team joining Cash App, we are free from our business obligations. We are now able to get back to the basics and our initial idea of an open-source platform for developers and not make decisions around business timelines and KPI improvements. In the last few weeks, we worked hard on cleaning and removing all the unnecessary stuff mentioned around our SaaS solution and created something easily deployable on any Kubernetes clusters, and immediately usable by any developer. KintoHub has never been so simple. In a few clicks, you can create a dedicated environment, connect your git repository and start deploying backend APIs, frontend websites, jobs, and workers. Developers can also configure custom domain names, observe memory, storage usage, and CPU metrics of any service, and even promote a service from a development environment to a production environment.

This is just the beginning of a new chapter for KintoHub. Kubernetes is powerful, but engineering teams building products need KintoHub to simplify the process of developing apps directly on Kubernetes so that they may be successful in production. In this new chapter, we are calling out to all cloud-native teams to explore this direction with us and use KintoHub as a tool provided to internal engineering teams to build, debug and ship apps with ease.

Want to give it a try? Here is the result of our hard work and is it is available now under the Apache 2.0 LICENSE:

https://github.com/kintoproj

The only requirement is a v1.16+ Kubernetes cluster up and running (local, EKS, GKE, AKS, etc.), empty or not. No specific configuration is required.

For the existing users who were using our SaaS platform and want to know what is the difference between the open-source version and the SaaS one, here is what we removed:

- **User account:** your open-source version of KintoHub works without authentication. You will instantly be able to create a new environment and start deploying your repository.
- **Multi-region:** we have removed this feature to keep the complexity low.
- **Github App:** just provide your git URL and credentials to deploy your private repository. Again, this was removed to keep the setup complexity low.
- **Billing:** A feature that should not exist in open source software :).

The rest is 100% the same. Out of the box, you get:

- Multi-Environment management on top of Kubernetes
- Build and Deploy any git repository
- Promote images between environments
- Historic build and deploy logs
- Debug live console logs without accessing Kubernetes
- Access pods with kinto-cli
- Connect custom domains with Let’s Encrypt SSL in a few clicks
- Deploy static sites, web apps, backend APIs, background workers, databases, and jobs
- Enable “sleeping” your services when they aren’t used with a single click

[Try it out](https://www.kintohub.com/getting-started/installation) and give us your feedback so that we can improve the way we use Kubernetes together!
