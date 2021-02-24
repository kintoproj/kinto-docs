---
id: mysql
title: MySQL
---

[MySQL](https://www.mysql.com/) is an open-source relational database management system (RDBMS)

## Create a MySQL Database

All MySQL databases are 100% dedicated resources.

1. Click on the **Create Service** button at the top right of your environment.
2. Click on the **From Catalog** tab at the top right.
3. Click on the **MySQL** option in the list.
4. Enter or generate your desired `Username` `Password` and `Root Password` values.
5. Click on the **Deploy** button at the top right and wait until the release is successful.
6. Once deployed, click on the **Access Tab** to read the access related options.

## Access Your MySQL Instances

You may only access your MySQL Instance from services running in the **same** environment.
Learn more about how to connect to your MySQL Instance under the [Access Tab](/features/features-access.md#mysql).

## MySQL Advanced Options

### Replication

Enabling replication turns on a separate endpoint for MySQL read only instances.
You can enable replication under the **Configurations** tab when Creating a MySQL service.
You may not enable this after the service has been created.
It's recommended to enable Replication in `production` environments or any environments you wish to decrease the chances of downtime.
Read more about read replicas [here](https://dev.mysql.com/doc/refman/8.0/en/replication.html).

### (Storage) Persistence

MySQL has an optional [(Storage) Persistence](/features/features-advanced.md#storage-persistence) and **Volume Size** options available under the **Advanced Options** Tab.

![MySQL Advanced](/img/catalogs/redis-advanced.png)
