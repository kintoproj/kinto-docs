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
Each one of the following steps are "incremental", you must run all the steps prior to the setup you chose (i.e. which means you cannot skip the commands in the middle).

For example, you cannot run `Enable Public Access to Deployed Services` and `Expose the Dashboard publicly` without running `Enable HTTPS support to Deployed Services`.

### Minimum Configuration

This will install KintoHub with minimum settings, which is on a local cluster with no inbound internet connection.

```sh
export KINTO_ARGS="--set minio.resources.requests.memory=null \
--set minio.makeBucketJob.resources.requests.memory=null \
--set builder.env.IMAGE_REGISTRY_HOST={registry_host} \
--set builder.workflow.docker.registry={docker_registry_fqdn} \
--set builder.workflow.docker.email={docker_registry_email} \
--set builder.workflow.docker.username={docker_registry_account_username} \
--set builder.workflow.docker.password={docker_registry_account_password} \
--set common.domainName={your_domain}"
```

#### Variables

| Variable | Description |
| ------------- | ----------- |
| `builder.env.IMAGE_REGISTRY_HOST` | The registry host for pushing/pulling the container images. |
| `builder.workflow.docker.registry` | The FQDN for your docker registry. Check [here](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#create-a-secret-by-providing-credentials-on-the-command-line) for more information. (For dockerhub please use `https://index.docker.io/v1/` instead. |
| `builder.workflow.docker.email` | Your Docker email. |
| `builder.workflow.docker.username` | Your Docker username. |
| `builder.workflow.docker.password` | Your Docker password. |
| `common.domainName` | Your domain name used for dashboard, core and the services you are gonna deployed. |

### Enable Public Access to Deployed Services

Adding the following arguments will expose the web services deployed publicly.

```sh
export KINTO_ARGS="${KINTO_ARGS} \
--set nginx-ingress-controller.service.type=LoadBalancer"
```

### Enable HTTPS support to Deployed Services

Adding the following arguments will allow KintoHub setup SSL automatically, in which guard all the services deployed with HTTPS.

```sh
export KINTO_ARGS="${KINTO_ARGS} \
--set common.ssl.enabled=true \
--set common.ssl.issuer.email={ssl_provider_email} \
--set common.ssl.issuer.solver.cloudflare.email={cloudflare_email} \
--set common.ssl.issuer.solver.cloudflare.cloudflareApiToken={cloudflare_api_token}"
```

#### Variables

| Variable | Description |
| ------------- | ----------- |
| `common.ssl.issuer.email` | Your email for the SSL certificates generated. |
| `common.ssl.issuer.solver.cloudflare.email` | The email of your cloudflare account. |
| `common.ssl.issuer.solver.cloudflare.cloudflareApiToken` | You [cloudflare API token](https://support.cloudflare.com/hc/en-us/articles/200167836-Managing-API-Tokens-and-Keys#12345680). |

### Expose the Dashboard publicly

Adding the following arguments will expose the dashboard to public. This action may considered as an insecure action, take your own risk when doing so.

```sh
export KINTO_ARGS="${KINTO_ARGS} \
--set core.ingress.enabled=true \
--set core.secretKey={your_kinto_secret} \
--set dashboard.ingress.enabled=true"
```

| Variable | Description |
| ------------- | ----------- |
| `core.secretKey` | Authentication key used to protect kinto core and kinto dashboard. |

### Install KintoHub

After arguments are set, run the following commands to install KintoHub.

```sh
kubectl create ns kintohub
helm repo add kintohub https://kintoproj.github.io/kinto-helm
helm upgrade --install kinto \
              $(echo ${KINTO_ARGS}) \
              --namespace kintohub kintohub/kinto
```
