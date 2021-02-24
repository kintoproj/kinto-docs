---
id: import url
title: Import URL
---

All KintoHub services start from a repository.
Today, you can deploy code from **any** public or private repository on **GitHub**, **BitBucket** and **GitLab** using a valid git URL and access token if your git repository is private.

:::note
Repositories do not have any requirements to be compatible with KintoHub. You can deploy an existing repository with zero changes to your code and no configuration required!
:::

## Setting New Repository

1. Click on the **Create Service** button at the top right.
2. Click on the **Import URL** tab.
3. Enter in your **Git Repository URL**.
4. Enter in your **Branch** you wish to build and deploy.
5. Optionally add an **Access Token** to your repository if it is private.

## Edit Existing Repo

1. Choose your environment you are interested in viewing at the top left.
2. Choose the service from the services list you are interested in editing.
3. Click **Edit Service** at the top right.
4. Change the **Branch** or **Access Token**.
5. Click `Deploy` at the top right.

:::note
You are not allowed to change the repository URL once it is set. You must recreate your service.
:::
