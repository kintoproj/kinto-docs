---
id: ci-cd
title: CI/CD
---

KintoHub provides CI/CD functionality using **Github Workflows** and a [Custom github action](https://github.com/kintoproj/kinto-github-actions).

## Usage

To enable CI/CD functionality for you KintoHub services -

- Create a `yaml` file named `trigger.yaml` in `{your-reposiory}/.github/workflows/trigger.yaml`
- Copy the contents from the example github workflow given below and replace the parameter values with your own.

| Parameter      | Description                                                                              | Required |
| -------------- | ---------------------------------------------------------------------------------------- | -------- |
| core_host      | The host address of your KintoHub instance. Should be supplied in the format `Host:Port` | true     |
| environment_id | Environment Id of the service that you want CI/CD functionality for.                     | true     |
| service_name   | Name of the service that you want CI/CD for.                                             | true     |

### Example Github Workflow :

```yaml
name: Trigger Deploy
on:
  push:
    branches: [main]
jobs:
  trigger:
    runs-on: ubuntu-latest
    steps:
      - name: trigger deploy
        uses: kintoproj/kinto-github-actions/trigger-deploy@v1.0.0
        with:
          core_host: core.oss.kintohub.net:443 #replace with your own value
          environment_id: 600f12ceb32a91c8d7b3f72d #replace with your own value
          service_name: nodejs #replace with your own value
```
