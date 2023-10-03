"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[844],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1560:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(4137));const o={id:"solution-prepare",sidebar_position:1,title:"Prepare"},i="Pre-Requisites",l={unversionedId:"Create/solution-prepare",id:"Create/solution-prepare",title:"Prepare",description:"Installing Process Mining on an Preexisting Openshift Deployment",source:"@site/docs/3-Create/Prepare.md",sourceDirName:"3-Create",slug:"/Create/solution-prepare",permalink:"/solution-processmining/Create/solution-prepare",draft:!1,editUrl:"https://github.com/ibm-client-engineering/solution-processmining/tree/main/packages/create-docusaurus/templates/shared/docs/3-Create/Prepare.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"solution-prepare",sidebar_position:1,title:"Prepare"},sidebar:"tutorialSidebar",previous:{title:"Create",permalink:"/solution-processmining/category/create"},next:{title:"Deploy",permalink:"/solution-processmining/Create/solution-deploy"}},p={},s=[{value:"Installing Process Mining on an Preexisting Openshift Deployment",id:"installing-process-mining-on-an-preexisting-openshift-deployment",level:2},{value:"Installing Operator dependencies",id:"installing-operator-dependencies",level:3},{value:"Installing the IBM Process Mining catalog",id:"installing-the-ibm-process-mining-catalog",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pre-requisites"},"Pre-Requisites"),(0,r.kt)("h2",{id:"installing-process-mining-on-an-preexisting-openshift-deployment"},"Installing Process Mining on an Preexisting Openshift Deployment"),(0,r.kt)("h3",{id:"installing-operator-dependencies"},"Installing Operator dependencies"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to the Red Hat OpenShift Web Console."),(0,r.kt)("li",{parentName:"ol"},"Under the profile of the admin user (for example, kubeadmin), click Copy login command > Display Token, copy the command, and paste into your terminal.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"oc login --token=<LOGIN TOKEN> --server=https://<SERVER URL> ")),(0,r.kt)("p",null,"Then, use the following commands to deploy the catalog sources to the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat <<EOF | oc apply -f -\napiVersion: operators.coreos.com/v1alpha1\nkind: CatalogSource\nmetadata:\n  name: ibm-db2uoperator-catalog\n  namespace: openshift-marketplace\nspec:\n  sourceType: grpc\n  image: icr.io/cpopen/ibm-db2uoperator-catalog@sha256:99f725098b801474ff77e880ca235023452116e4b005e49de613496a1917f719\n  imagePullPolicy: Always\n  displayName: IBM Db2U Catalog\n  publisher: IBM\n  updateStrategy:\n    registryPoll:\n      interval: 45m\nEOF\n\n\n\ncat <<EOF | oc apply -f -\napiVersion: operators.coreos.com/v1alpha1\nkind: CatalogSource\nmetadata:\n  name: ibm-cloud-databases-redis-operator-catalog\n  namespace: openshift-marketplace\nspec:\n  displayName: ibm-cloud-databases-redis-operator-catalog\n  publisher: IBM\n  sourceType: grpc\n  image: icr.io/cpopen/ibm-cloud-databases-redis-catalog@sha256:f7125e46c322421067a70a00227b3244f86c111e301d2695ba9e30e12ec19955\n  updateStrategy:\n    registryPoll:\n      interval: 45m\nEOF\n\n\ncat <<EOF | oc apply -f -\napiVersion: operators.coreos.com/v1alpha1\nkind: CatalogSource\nmetadata:\n  name: opencloud-operators\n  namespace: openshift-marketplace\nspec:\n  displayName: IBMCS Operators\n  publisher: IBM\n  sourceType: grpc\n  image: icr.io/cpopen/ibm-common-service-catalog:3.23.3\n  updateStrategy:\n    registryPoll:\n      interval: 45m\nEOF\n")),(0,r.kt)("h3",{id:"installing-the-ibm-process-mining-catalog"},"Installing the IBM Process Mining catalog"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note: Ensure that you have cluster administrator authority with cluster-admin permissions.")),(0,r.kt)("p",null,"Use the following command to create a new namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export PM_PROJECT=mynamespace\noc new-project ${PM_PROJECT}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to the OpenShift web console for your cluster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the navigation, click Operators > OperatorHub.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the OperatorHub page, search for process mining and then click the IBM Process Mining tile."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://zenhub.ibm.com/images/6442f46ac0371b5acaba3fc4/6d2ecec7-763a-42da-9248-5b7f11790f05",alt:"image.png"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Install.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the Install Operator page, complete the following fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update Channel: The supported update channels are displayed. This indicates that an Operator subscription is automatically created to keep the Operator up to date when new versions are delivered to the channel. It is recommended that you install the Operator by using a Manual approval strategy, which requires you to review the installation plan for a new Operator release.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Installation Mode: Choose whether to install the Operator into all namespaces in the cluster or into a specific namespace.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Installed Namespace: If you chose the option for a specific namespace, select a namespace from this list.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Approval Strategy: Click Automatic (the default) to indicate that the installation must proceed with no additional approval. This option will also cause the running instance of your Operator to be automatically upgraded whenever new versions are delivered to the channel. Click Manual if you want to review a generated installation plan for the Operator and then manually approve the installation. This option will also require you to review the installation plan for each new Operator version that is delivered to the channel, and then manually approve an upgrading."))),(0,r.kt)("p",{parentName:"li"},"Tip: If required, you can change the approval strategy later from the Subscription tab for the installed IBM Process Mining Operator. You can access this tab by clicking Operators > Installed Operators in the navigation pane, and then clicking IBM Process Mining.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Install to install the Operator. If you choose a Manual approval strategy, you are required to review and approve the installation plan of the subscription. No additional action is needed if you selected an Automatic approval strategy.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for the installation to complete and then click View Installed Operators in namespace. The IBM Process Mining Operator and its dependent Operators are displayed on the Installed Operators page with a deployment status of Succeeded / Up to date."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://zenhub.ibm.com/images/6442f46ac0371b5acaba3fc4/79cf7b08-a042-4fa5-a5bd-d14f94db584b",alt:"image.png"})))))}u.isMDXComponent=!0}}]);