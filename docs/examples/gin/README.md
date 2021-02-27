---
id: gin-example
title: Gin
---

A sample Gin app for [KintoHub](https://kintohub.com)

## :rocket: Deploying on KintoHub

- **Service Type:** Backend API
- **Repo:** https://github.com/kintoproj/kinto-examples
- **Subfolder Path:** ./gin
- **Branch:** main
- **Language:** Go
- **Language version:** 1.12
- **Build Command:** `go build -o main .`
- **Start Command:** `./main`
- **Port:** 80

## :hammer: Running locally

**Pre-requisites:** Go v1.12+

- Clone the repository to a folder of choice.

```
$ git clone https://github.com/kintoproj/kinto-examples

$ cd kinto-examples/gin
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
