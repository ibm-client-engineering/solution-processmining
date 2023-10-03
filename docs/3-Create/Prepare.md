---
id: solution-prepare
sidebar_position: 1
title: Prepare
---

# Pre-Requisites

## Installing Process Mining on an Preexisting Openshift Deployment

### Installing Operator dependencies

1. Log in to the Red Hat OpenShift Web Console.
2. Under the profile of the admin user (for example, kubeadmin), click Copy login command > Display Token, copy the command, and paste into your terminal.

`oc login --token=<LOGIN TOKEN> --server=https://<SERVER URL> `

Then, use the following commands to deploy the catalog sources to the cluster:

```
cat <<EOF | oc apply -f -
apiVersion: operators.coreos.com/v1alpha1
kind: CatalogSource
metadata:
  name: ibm-db2uoperator-catalog
  namespace: openshift-marketplace
spec:
  sourceType: grpc
  image: icr.io/cpopen/ibm-db2uoperator-catalog@sha256:99f725098b801474ff77e880ca235023452116e4b005e49de613496a1917f719
  imagePullPolicy: Always
  displayName: IBM Db2U Catalog
  publisher: IBM
  updateStrategy:
    registryPoll:
      interval: 45m
EOF



cat <<EOF | oc apply -f -
apiVersion: operators.coreos.com/v1alpha1
kind: CatalogSource
metadata:
  name: ibm-cloud-databases-redis-operator-catalog
  namespace: openshift-marketplace
spec:
  displayName: ibm-cloud-databases-redis-operator-catalog
  publisher: IBM
  sourceType: grpc
  image: icr.io/cpopen/ibm-cloud-databases-redis-catalog@sha256:f7125e46c322421067a70a00227b3244f86c111e301d2695ba9e30e12ec19955
  updateStrategy:
    registryPoll:
      interval: 45m
EOF


cat <<EOF | oc apply -f -
apiVersion: operators.coreos.com/v1alpha1
kind: CatalogSource
metadata:
  name: opencloud-operators
  namespace: openshift-marketplace
spec:
  displayName: IBMCS Operators
  publisher: IBM
  sourceType: grpc
  image: icr.io/cpopen/ibm-common-service-catalog:3.23.3
  updateStrategy:
    registryPoll:
      interval: 45m
EOF
```

### Installing the IBM Process Mining catalog

:::note
Note: Ensure that you have cluster administrator authority with cluster-admin permissions.
:::

Use the following command to create a new namespace:

```
export PM_PROJECT=mynamespace
oc new-project ${PM_PROJECT}
```

1. Log in to the OpenShift web console for your cluster.

2. From the navigation, click Operators > OperatorHub.

3. From the OperatorHub page, search for process mining and then click the IBM Process Mining tile.

    ![image.png](https://zenhub.ibm.com/images/6442f46ac0371b5acaba3fc4/6d2ecec7-763a-42da-9248-5b7f11790f05)

4. Click Install.

5. From the Install Operator page, complete the following fields:

    - Update Channel: The supported update channels are displayed. This indicates that an Operator subscription is automatically created to keep the Operator up to date when new versions are delivered to the channel. It is recommended that you install the Operator by using a Manual approval strategy, which requires you to review the installation plan for a new Operator release.

    - Installation Mode: Choose whether to install the Operator into all namespaces in the cluster or into a specific namespace.

    - Installed Namespace: If you chose the option for a specific namespace, select a namespace from this list.

    - Approval Strategy: Click Automatic (the default) to indicate that the installation must proceed with no additional approval. This option will also cause the running instance of your Operator to be automatically upgraded whenever new versions are delivered to the channel. Click Manual if you want to review a generated installation plan for the Operator and then manually approve the installation. This option will also require you to review the installation plan for each new Operator version that is delivered to the channel, and then manually approve an upgrading.

    Tip: If required, you can change the approval strategy later from the Subscription tab for the installed IBM Process Mining Operator. You can access this tab by clicking Operators > Installed Operators in the navigation pane, and then clicking IBM Process Mining.

6. Click Install to install the Operator. If you choose a Manual approval strategy, you are required to review and approve the installation plan of the subscription. No additional action is needed if you selected an Automatic approval strategy.

7. Wait for the installation to complete and then click View Installed Operators in namespace. The IBM Process Mining Operator and its dependent Operators are displayed on the Installed Operators page with a deployment status of Succeeded / Up to date.

    ![image.png](https://zenhub.ibm.com/images/6442f46ac0371b5acaba3fc4/79cf7b08-a042-4fa5-a5bd-d14f94db584b)
