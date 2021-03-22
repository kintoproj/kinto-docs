---
id: minikube
title: Minikube
---

> The cloud is just someone else's computer.

How to install KintoHub on [Minikube](https://minikube.sigs.k8s.io/docs/).

## Install and start Minikube

Visit the [minikube documentation](https://minikube.sigs.k8s.io/docs/start/) and install `minikube` on your laptop.  
Then run `minikube start` in order to start your cluster locally.

## Install KintoHub

Follow our [installation guide](../getting-started/installation.md#install-argo-workflow) to install [Argo Workflow](https://argoproj.github.io/projects/argo/).

Change the values inside the curly braces and run

```sh
kubectl create ns kintohub
helm repo add kintohub https://kintoproj.github.io/kinto-helm
helm upgrade --install kinto \
              --set minio.resources.requests.memory=null \
              --set minio.makeBucketJob.resources.requests.memory=null \
              --set builder.env.IMAGE_REGISTRY_HOST={registry_host} \
              --set builder.workflow.docker.registry={docker_registry_fqdn} \
              --set builder.workflow.docker.email={docker_registry_email} \
              --set builder.workflow.docker.username={docker_registry_account_username} \
              --set builder.workflow.docker.password={docker_registry_account_password} \
              --set common.domainName={your_domain}
              --namespace kintohub kintohub/kinto
```

| Variable | Description |
| ------------- | ----------- |
| `builder.env.IMAGE_REGISTRY_HOST` | The registry host for pushing/pulling the container images. |
| `builder.workflow.docker.registry` | The FQDN for your docker registry. Check [here](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#create-a-secret-by-providing-credentials-on-the-command-line) for more information. (For dockerhub please use `https://index.docker.io/v1/` instead. |
| `builder.workflow.docker.email` | Your Docker email. |
| `builder.workflow.docker.username` | Your Docker username. |
| `builder.workflow.docker.password` | Your Docker password. |
| `common.domainName` | Your domain name used for dashboard, core and the services you are gonna deployed. |

## Access KintoHub

Port forward kinto core and kinto dashboard

```sh
kubectl port-forward svc/kinto-core 8090 -n kintohub

kubectl port-forward svc/kinto-dashboard 5000 -n kintohub
```

Open [localhost:5000](http://localhost:5000).
