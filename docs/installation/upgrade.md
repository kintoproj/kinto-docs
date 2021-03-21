# Upgrade your KintoHub

After you have installed your KintoHub instance on your Kubernetes cluster, 
it would be nice to keep it always up-to-date for more new features and/or bug fixes.

With the help of [Helm upgrade](https://helm.sh/docs/helm/helm_upgrade/), 
this can be easily done and you can expect a 0 downtime in most cases!

## Prerequisites

Make sure you have installed your KintoHub correctly.
If it is not installed yet, check our [Installation Guide](../getting-started/installation.md).

```shell
# List the helm release
helm list -n kintohub

# You should see the release and also the chart version
NAME 	NAMESPACE	REVISION	UPDATED                             	STATUS  	CHART      	APP VERSION
kinto	kintohub 	1       	2021-03-10 19:04:30.143016 +0800 HKT	deployed	kinto-0.4.4
```

### Upgrade to the latest version

Note: There may be breaking changes for upgrading to the latest version. 
Check our release notes carefully before installing a new major/minor version.

```shell
# Fetch the latest charts
helm repo update

# This will upgrade KintoHub using the latest version
helm upgrade kinto kintohub/kinto -n kintohub

# Check the version after it is upgraded
helm list -n kintohub
```

### Upgrade to the specific version

If you prefer upgrading to a version rather than the `latest`, 
you can run with `--version` flag to specify the version you needed.

You can check the versions [here](https://github.com/kintoproj/kinto-helm/releases).

```shell
# Fetch the latest charts
helm repo update

# This will upgrade KintoHub to the specific version
helm upgrade kinto kintohub/kinto -n kintohub --version {version}

# Check the version after it is upgraded
helm list -n kintohub
```
