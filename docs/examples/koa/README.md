---
id: koa-example
title: Koa
---

A sample Koa app for [KintoHub](https://kintohub.com)

## :rocket: Deploying on KintoHub

- **Service Type:** Backend API
- **Repo:** https://github.com/kintoproj/kinto-examples
- **Subfolder Path:** ./koa
- **Branch:** main
- **Language:** NodeJS
- **Language version:** 12
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Port:** 80

## :hammer: Running locally

**Pre-requisites:** NodeJS v12+

- Clone the repository to a folder of choice.

```
$ git clone https://github.com/kintoproj/kinto-examples

$ cd kinto-examples/koa
```

- Install the dependencies

```
$ npm install
```

- To start the app

```
$ npm start
```

## :zap: API Call

**Local:**

```
curl -X GET http://localhost/hello/world
```

**On KintoHub:**

```
curl -X GET http://<KintohubHostURL>/hello/world
```

#### Response

```json
{
  "message": "Hello world"
}
```

## :ambulance: Support

**Slack:** https://join.slack.com/t/kintogoons/shared_invite/zt-mu6bvg79-BmkkdMRRwohJioZggXVYeA
