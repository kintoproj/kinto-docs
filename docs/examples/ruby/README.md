---
id: ruby-example
title: Ruby
---

A sample ruby app for [KintoHub](https://kintohub.com)

## :rocket: Deploying on KintoHub

- **Service Type:** Web App
- **Repo:** https://github.com/kintoproj/kinto-examples
- **Subfolder Path:** ./ruby
- **Branch:** main
- **Language:** Ruby
- **Language version:** 2.5
- **Build Command:** `gem install bundler && bundle install`
- **Start Command:** `bundle exec ruby app.rb`
- **Port:** 8000

## :hammer: Running locally

**Pre-requisites:** Ruby v2.5

- Clone the repository to a folder of choice.

```
$ git clone https://github.com/kintoproj/kinto-examples

$ cd kinto-examples/ruby
```

- Install the dependencies

```
$ gem install bundler && bundle install
```

- To start the app

```
$ bundle exec ruby app.rb
```

> Default port 8000 (port can be set by setting PORT env variable)

## :ambulance: Support

**Slack:** https://slack.kintohub.com/
