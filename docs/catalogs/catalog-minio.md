---
id: minio
title: Minio
---

[Minio](https://min.io/) MinIO's high-performance, software-defined object storage suite enables customers to build cloud-native data infrastructure for machine learning, analytics and application data workloads.

## Create a Minio Server

All Minio servers are 100% dedicated to your environment.

1. Click on the **Create Service** button at the top right of your environment.
2. Click on the **From Catalog** tab at the top right.

![Catalog Tab](/img/catalogs/catalog-tab.png)

4. Click on the **Minio** option in the list.
5. Input or generate your `Access Key` and `Secret Key`.

![Minio](/img/catalogs/minio.png)

6. Click **Deploy** at the top right and wait until the release is successful.
7. Once deployed, click on the **Access Tab** to read the access related options.

## Access Your Minio Instances

You may only access your Minio Instance from services running in the **same** environment.
Learn more about how to connect to your Minio Instance under the [Access Tab](/features/features-access.md#minio).

## Minio Advanced Options

### Replication

When enabled, this will setup your Minio server to be highly available.
You can increase or decrease your replicas under the **Configurations** tab when creating or updating a Minio service.
It's recommended to have at least **4** replicas in `production` environments or any environments you wish to decrease the chances of downtime.
Read more about minio highly available distributed mode [here](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

### (Storage) Persistence

Minio has an optional [(Storage) Persistence](/features/features-advanced.md#storage-persistence) and **Volume Size** options available under the **Advanced Options** Tab.

![Minio Advanced](/img/catalogs/redis-advanced.png)
