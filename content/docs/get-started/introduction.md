---
title: Introduction
type: docs
#weight: 10
prev: docs/get-started/
next: docs/get-started/installation
---

### What is Dboxed?

Dboxed is an Open Source software that allows you to get completely independent of Cloud and VPS providers. The goal is to provide
an easy way to run a once defined workload on any server with a recent Linux Kernel.

We achieve this by reducing the requirements we have on the underlying server and its surrounding infrastructure to an
absolute minimum. At the same time, we try to provide as much as possible of a typical cloud like environment.

Dboxed can be used via the web-based frontend, via the CLI or via the API. You can self-host it, or use the Dboxed Cloud
version (coming soon).

### Typical cloud?

A typical cloud provider gives you a lot of software defined infrastructure components that allow you to be super
flexible. Examples are virtual networks, attachable volumes and load balancers.

AWS, for example, offers you [Virtual Private Clouds](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
to get software defined networking, where your servers run privately and communicate internally. 
[Elastic IPs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) and
[Elastic Load Balancers](https://aws.amazon.com/elasticloadbalancing/) allow you to communicate with the public and
get traffic (e.g. HTTP) into your workloads. [Elastic Block Devices](https://aws.amazon.com/ebs/) allow you to have
persistence not bound to a server, so that you can move it to other (e.g., faster) servers or create snapshots
for backup purposes.

Other cloud providers have similar offerings. But nearly all of these cloud providers and their offerings are
incompatible to each other. If you're using AWS, you won't be able to easily migrate to Hetzner. You also won't be able
to mix AWS and Hetzner or any other cloud provider.

### How does dboxed solve this?

Dboxed tries hard to not get dependent on any of these cloud provider specific features or offerings. We only use these
to introduce optimizations, while allowing you to move away from them later.

As an example, we use P2P VPN solutions like [Netbird](https://netbird.io/) to offer a VPC like experience. Such P2P
solutions are great at detecting local network connectivity, meaning that being in the same AWS-VPC will cause a
significant performance boost and reduce traffic cost, while not getting strictly dependent on the existence of the VPC.

Dboxed also implements a cloud-agnostic volumes implementation that uses S3 for periodic and controlled incremental backups.
When a workload needs to move to another server, a final backup is performed, allowing the new server perform a full
restore before re-starting the workload.

Later versions of dboxed will use AWS EBS volumes or Hetzner Volumes to allow faster migration between servers, again
without getting dependent on them.