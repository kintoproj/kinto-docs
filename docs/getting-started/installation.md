---
id: installation
title: Installation
---

## Prerequisites Details

- `Kubernetes 1.15+`
- [`kubectl`](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [`Helm v3.5+`](https://helm.sh/)

## Chart Details

The chart will do the following:

- Deploy [Kinto Dashboard](https://github.com/kintoproj/kinto-dashboard)
- Deploy [Kinto Core](https://github.com/kintoproj/kinto-core)
- Deploy [Kinto Builder](https://github.com/kintoproj/kinto-builder)
- Deploy [Nginx Ingress Controller](https://github.com/bitnami/charts/tree/master/bitnami/nginx-ingress-controller)
- Deploy [Proxless](https://github.com/bappr/proxless)
- Deploy [Minio](https://github.com/minio/charts)

## Installing the chart

If you are experienced with Kubernetes, you can customize your installation [here](advanced-installation.md).

### Prerequisites

- [Argo Workflow](https://github.com/argoproj/argo-workflows)

  > **Note:** KintoHub has been tested with argo workflow chart 0.16.6.

- KintoHub does not support its private docker registry yet. You must use an external one (docker hub, gcr, ecr, acr, etc.).

### Install Argo Workflow

_Notes: for `containerd` runtime, you need to add `--set controller.containerRuntimeExecutor=kubelet` (k8s +1.20)_

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
              --namespace argo argo/argo
```

### Install Cert-Manager

- [Cert Manager](https://cert-manager.io/docs/)

  > **Note:** KintoHub has been tested with cert-manager chart v0.15.0.

_You must have a domain name ready to be used. KintoHub only supports Cloudflare at the moment, you can create a free account and transfer your domain ownership easily. Please create an issue if you want to add more providers._

```sh
kubectl create namespace cert-manager
helm repo add jetstack https://charts.jetstack.io
helm upgrade --install cert-manager \
              --version v0.15.0 \
              --set installCRDs=true \
              --namespace cert-manager jetstack/cert-manager
```

### Install KintoHub

This will install KintoHub with **PUBLIC** dashboard access.
For more secure setup, please check our [advanced installation](advanced-installation.md).

Don't forget the change the values inside the curly braces.

```sh
kubectl create ns kintohub
helm repo add kintohub https://kintoproj.github.io/kinto-helm

helm upgrade --install kinto \
              --set common.domainName='{your_domain}' \
              --set common.ssl.enabled=true \
              --set common.ssl.issuer.email={your_email} \
              --set common.ssl.issuer.solver.cloudflare.email={your_cloudflare_account} \
              --set common.ssl.issuer.solver.cloudflare.cloudflareApiToken={your_cloudflare_api_token} \
              --set builder.env.IMAGE_REGISTRY_HOST={your_image_registry_host} \
              --set builder.workflow.docker.registry={your_image_registry_api_host} \
              --set builder.workflow.docker.email={your_image_registry_email} \
              --set builder.workflow.docker.username={your_image_registry_username} \
              --set builder.workflow.docker.password={your_image_registry_password} \
              --set minio.resources.requests.memory=null \
              --set nginx-ingress-controller.service.type=LoadBalancer \
              --set core.ingress.enabled=true \
              --set dashboard.ingress.enabled=true \             
              --namespace kintohub kintohub/kinto
```

This is an example for the configuration using `oss.kintohub.net` as domain, with `dockerhub` as image registry (public).

```sh

helm upgrade --install kinto \
              --set common.domainName='oss.kintohub.net' \
              --set common.ssl.enabled=true \
              --set common.ssl.issuer.email=devaccounts@kintohub.com \
              --set common.ssl.issuer.solver.cloudflare.email=devaccounts@kintohub.com \
              --set common.ssl.issuer.solver.cloudflare.cloudflareApiToken={cloudflare-api-token} \
              --set builder.env.IMAGE_REGISTRY_HOST=kintohub \
              --set builder.workflow.docker.registry=https://index.docker.io/v1/ \
              --set builder.workflow.docker.email=devaccounts@kintohub.com \
              --set builder.workflow.docker.username=kintohub \
              --set builder.workflow.docker.password={dockerhub-api-token} \
              --set minio.resources.requests.memory=null \
              --set nginx-ingress-controller.service.type=LoadBalancer \
              --set core.ingress.enabled=true \
              --set dashboard.ingress.enabled=true \             
              --namespace kintohub kintohub/kinto
```

### Configure and Access KintoHub

In order to configure KintoHub dashboard and the services it deploy, you should configure your DNS with the instructions shown after KintoHub is installed. 

i.e. You should see the following instruction after you install KintoHub:

```sh
######################################

SETUP:

1.  Get the IP of your Load Balancer.
    NOTE: It may take a few minutes for the LoadBalancer public IP to be available!

    You can watch the status of the service by running `kubectl get svc -n kintohub -w kinto-nginx-ingress-controller`.
    export LB_IP=$(kubectl get service kinto-nginx-ingress-controller -n kintohub -o jsonpath="{.status.loadBalancer.ingress[0].ip}")
    echo ${LB_IP}
    
...
```

Execute the following line (it may return empty but just wait a while, as the load balancer may take time to setup )

```sh
export LB_IP=$(kubectl get service kinto-nginx-ingress-controller -n kintohub -o jsonpath="{.status.loadBalancer.ingress[0].ip}")
echo ${LB_IP}

> 104.248.96.100
```

Configure the A record with the IP you got on your DNS provider.

For example on cloudflare if you have a domain `example.com`:

![DNS Setup](/img/get-started/dns-setup.png)

All your subdomain `*.kinto.example.com` are now pointed to KintoHub. i.e. your services deployed by KintoHub should have the url like `services-ae21234.kinto.example.com`, and at the same time you can access the dashboard at `dashboard.kinto.example.com` 

## Uninstall the chart

```sh
helm uninstall kinto --namespace kintohub
kubectl delete ns kintohub
```

> **Note:** you can use the same command to uninstall argo and cert-manager too.