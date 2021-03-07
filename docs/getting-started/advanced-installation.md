---
id: advanced-installation
title: Advanced Installation
---

This is only for users that have basic understanding on cloud infrastructure and Kubernetes. 
If you are not experienced with cloud configuration, please check our [installation guide](installation.md) instead. 

## Prerequisites

Please follow our [installation guide](installation.md) to install [Argo Workflow](installation.md#install-argo-workflow) and [Cert Manager](installation.md##install-cert-manager) instead.
If you are not planning to support SSL certificates, please omit the installation for `Cert Manager`.


## Install KintoHub

Run the following steps depending on the setup you want.  
Each one of the following steps are "incremental", you must run all the steps prior to the setup your chose.

### Minimum Configuration

This will install KintoHub with minimum settings, which is on a local cluster with no inbound internet connection.

```sh
export KINTO_ARGS="--set minio.resources.requests.memory=null \
--set minio.makeBucketJob.resources.requests.memory=null \
--set builder.env.IMAGE_REGISTRY_HOST=kintohub \
--set builder.workflow.docker.registry=https://index.docker.io/v1/ \
--set builder.workflow.docker.email=devaccounts@kintohub.com \
--set builder.workflow.docker.username=docker-username \
--set builder.workflow.docker.password=docker-password"
```

### Enable Public Access to Deployed Services 

Adding the following arguments will expose the web services deployed publicly.

```sh
export KINTO_ARGS="${KINTO_ARGS} \
--set nginx-ingress-controller.service.type=LoadBalancer \
--set common.domainName=oss.kintohub.net"
```

### Enable HTTPS support to Deployed Services

Adding the following arguments will allow KintoHub setup SSL automatically, in which guard all the services deployed with HTTPS.

```sh
export KINTO_ARGS="${KINTO_ARGS} \
--set common.ssl.enabled=true \
--set common.ssl.issuer.email=devaccounts@kintohub.com \
--set common.ssl.issuer.solver.cloudflare.email=devaccounts@kintohub.com \
--set common.ssl.issuer.solver.cloudflare.cloudflareApiToken=cf-token"
```


### Expose the Dashboard publicly

Adding the following arguments will expose the dashboard to public. This action may considered as an insecure action, take your own risk when doing so.

```sh
export KINTO_ARGS="${KINTO_ARGS} \
--set core.ingress.enabled=true \
--set dashboard.ingress.enabled=true"
```


### Install KintoHub

Please be noticed that the commands above are considered "incremental", which means you cannot skip the commands in the middle.

For example, you cannot run `Enable Public Access to Deployed Services` and `Expose the Dashboard publicly` without running `Enable HTTPS support to Deployed Services`.


After arguments are set, run the following commands to install KintoHub.

```sh
kubectl create ns kintohub
helm repo add kintohub https://kintoproj.github.io/kinto-helm
helm upgrade --install kinto \
              $(echo ${KINTO_ARGS}) \
              --namespace kintohub kintohub/kinto
```