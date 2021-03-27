---
id: digital-ocean
title: Install On Digital Ocean
---

[Digital Ocean](https://www.digitalocean.com/) is a cloud infrastructure provider 
which provides also [managed Kubernetes cluster services](https://www.digitalocean.com/products/kubernetes/). 
You can install KintoHub on Digital Ocean start with the cheapest tier (single node with 1GB of memory without LoadBalancer).

## Create your Kubernetes Cluster on Digital Ocean 

Visit the [Digital Ocean documentation](https://www.digitalocean.com/docs/kubernetes/quickstart/) to create a Kubernetes cluster.  
Once everything is setup you should be able to access the Kubernetes cluster with `kubectl`.

## Install Cert Manager

Install Cert Manager from our [installation guide](installation/installation#install-cert-manager) if you require auto TLS certificate for your exposed services.

## Install Argo Workflow

```sh
kubectl create namespace argo
helm repo add argo https://argoproj.github.io/argo-helm
helm upgrade --install argo \
    --version 0.16.6 \
    --set installCRD=true \
    --set singleNamespace=false \
    --set useDefaultArtifactRepo=true \
    --set artifactRepository.archiveLogs=true \
    --set artifactRepository.s3.accessKeySecret.name=kinto-minio \
    --set artifactRepository.s3.accessKeySecret.key=accesskey \
    --set artifactRepository.s3.secretKeySecret.name=kinto-minio \
    --set artifactRepository.s3.secretKeySecret.key=secretkey \
    --set artifactRepository.s3.insecure=true \
    --set artifactRepository.s3.bucket=argo-artifacts \
    --set artifactRepository.s3.endpoint=kinto-minio:9000 \
    --set artifactRepository.minio.install=false \
    --set controller.containerRuntimeExecutor=kubelet \
    --namespace argo argo/argo
```

It is similar to our [installation guide](../installation/installation.md#install-argo-workflow) to install [Argo Workflow](https://argoproj.github.io/projects/argo/),
except we need to have the flag `--set controller.containerRuntimeExecutor=kubelet` on, since Digital Ocean is using the latest Kubernetes version (1.20+).

## Install KintoHub

The installation is identical to [installation guide](installation/installation.md#install-kintohub) or 
[advanced installation guide](installation/advanced-installation.md#install-kintohub).
For the example below, it will create a secured dashboard with token authentication, exposing everything publicly, 
and everything services deployed are secured with TLS. (* This will create a Load Balancer which charges $10 per month)

Change the values inside the curly braces and run

```sh
kubectl create ns kintohub
helm repo add kintohub https://kintoproj.github.io/kinto-helm
helm upgrade --install kinto \
  --set common.domainName={your_domain} \
  --set common.ssl.enabled=true \
  --set common.ssl.issuer.email={ssl_issuer_email} \
  --set common.ssl.issuer.solver.cloudflare.email={cloudflare_account_email} \
  --set common.ssl.issuer.solver.cloudflare.cloudflareApiToken={cloudflare_api_token} \
  --set minio.resources.requests.memory=null \
  --set minio.makeBucketJob.resources.requests.memory=null \
  --set builder.env.IMAGE_REGISTRY_HOST={registry_host} \
  --set builder.workflow.docker.registry={docker_registry_fqdn} \
  --set builder.workflow.docker.email={docker_registry_email} \
  --set builder.workflow.docker.username={docker_registry_account_username} \
  --set builder.workflow.docker.password={docker_registry_account_password} \
  --set nginx-ingress-controller.service.type=LoadBalancer \
  --set core.ingress.enabled=true \
  --set core.secretKey={dashboard_secret}
  --set dashboard.ingress.enabled=true \
  --namespace kintohub kintohub/kinto
```

Check the variables [here](installation/advanced-installation.md#variables).

Once the installation completed, you should run also the command below from the prompt.

```shell
Notes: if NetworkPolicies are enabled on your cluster, you need 'whitelist' the kintohub namespaces so that they can access your environments.
Run `kubectl get networkpolicies`. If it does not error, that means that NetworkPolicies are enabled.
If enabled, run `kubectl label ns kube-system argo cert-manager kintohub owner=kintohub --overwrite`.

> kubectl label ns kube-system argo cert-manager kintohub owner=kintohub --overwrite
```

This is because Digital Ocean by default enabled the network policy for your cluster. 
All of your services deployed will be unaccessible if you fail to run the line above.

## Access KintoHub

Port forward kinto core and kinto dashboard

```sh
kubectl port-forward svc/kinto-core 8090 -n kintohub

kubectl port-forward svc/kinto-dashboard 5000 -n kintohub
```

Open [localhost:5000](http://localhost:5000).
