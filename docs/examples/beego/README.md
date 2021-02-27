---
id: beego-example
title: Beego
---

A sample Beego app for [KintoHub](https://kintohub.com)

## :rocket: Deploying on KintoHub

- **Service Type:** Backend API
- **Repo:** https://github.com/kintoproj/kinto-examples
- **Subfolder Path:** ./beego
- **Branch:** main
- **Language:** Go
- **Language version:** 1.13
- **Build Command:** `go build -o main .`
- **Start Command:** `./main`
- **Port:** 80

## :hammer: Running locally

**Pre-requisites:** Go v1.13

- Clone the repository to a folder of choice.

```
$ git clone https://github.com/kintoproj/kinto-examples

$ cd beego
```

- Build the app

```
$ go build -o main .
```

- To start the app

```
$ ./main
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
