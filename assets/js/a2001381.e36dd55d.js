(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1009],{4137:function(t,l,e){"use strict";e.d(l,{Zo:function(){return s},kt:function(){return c}});var n=e(7294);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function a(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function u(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?a(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function o(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)e=a[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)e=a[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),k=function(t){var l=n.useContext(p),e=l;return t&&(e="function"==typeof t?t(l):u(u({},l),t)),e},s=function(t){var l=k(t.components);return n.createElement(p.Provider,{value:l},t.children)},d={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},i=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),i=k(e),c=r,m=i["".concat(p,".").concat(c)]||i[c]||d[c]||a;return e?n.createElement(m,u(u({ref:l},s),{},{components:e})):n.createElement(m,u({ref:l},s))}));function c(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var a=e.length,u=new Array(a);u[0]=i;var o={};for(var p in l)hasOwnProperty.call(l,p)&&(o[p]=l[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,u[1]=o;for(var k=2;k<a;k++)u[k]=e[k];return n.createElement.apply(null,u)}return n.createElement.apply(null,e)}i.displayName="MDXCreateElement"},9104:function(t,l,e){"use strict";e.r(l),e.d(l,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return k},toc:function(){return s},default:function(){return i}});var n=e(2122),r=e(9756),a=(e(7294),e(4137)),u=["components"],o={id:"mutations",title:"Mutations",slug:"mutations",sidebar_position:2},p=void 0,k={unversionedId:"graphql/mutations",id:"graphql/mutations",isDocsHomePage:!1,title:"Mutations",description:"addGroupMembers",source:"@site/genDocs/graphql/mutations.md",sourceDirName:"graphql",slug:"/graphql/mutations",permalink:"/docs/graphql/mutations",editUrl:"https://github.com/linkedin/datahub/blob/master/genDocs/graphql/mutations.md",version:"current",sidebarPosition:2,frontMatter:{id:"mutations",title:"Mutations",slug:"mutations",sidebar_position:2},sidebar:"overviewSidebar",previous:{title:"Queries",permalink:"/docs/graphql/queries"},next:{title:"Objects",permalink:"/docs/graphql/objects"}},s=[{value:"addGroupMembers",id:"addgroupmembers",children:[]},{value:"addLink",id:"addlink",children:[]},{value:"addOwner",id:"addowner",children:[]},{value:"addTag",id:"addtag",children:[]},{value:"addTerm",id:"addterm",children:[]},{value:"createGroup",id:"creategroup",children:[]},{value:"createPolicy",id:"createpolicy",children:[]},{value:"deletePolicy",id:"deletepolicy",children:[]},{value:"removeGroup",id:"removegroup",children:[]},{value:"removeGroupMembers",id:"removegroupmembers",children:[]},{value:"removeLink",id:"removelink",children:[]},{value:"removeOwner",id:"removeowner",children:[]},{value:"removeTag",id:"removetag",children:[]},{value:"removeTerm",id:"removeterm",children:[]},{value:"removeUser",id:"removeuser",children:[]},{value:"updateChart",id:"updatechart",children:[]},{value:"updateDashboard",id:"updatedashboard",children:[]},{value:"updateDataFlow",id:"updatedataflow",children:[]},{value:"updateDataJob",id:"updatedatajob",children:[]},{value:"updateDataset",id:"updatedataset",children:[]},{value:"updateDescription",id:"updatedescription",children:[]},{value:"updatePolicy",id:"updatepolicy",children:[]},{value:"updateTag",id:"updatetag",children:[]},{value:"updateUserStatus",id:"updateuserstatus",children:[]}],d={toc:s};function i(t){var l=t.components,e=(0,r.Z)(t,u);return(0,a.kt)("wrapper",(0,n.Z)({},d,e,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"addgroupmembers"},"addGroupMembers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Add members to a group"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#addgroupmembersinput"},(0,a.kt)("code",null,"AddGroupMembersInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"addlink"},"addLink"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Add a link, or institutional memory, from a particular Entity"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#addlinkinput"},(0,a.kt)("code",null,"AddLinkInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"addowner"},"addOwner"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Add an owner to a particular Entity"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#addownerinput"},(0,a.kt)("code",null,"AddOwnerInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"addtag"},"addTag"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Add a tag to a particular Entity or subresource"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#tagassociationinput"},(0,a.kt)("code",null,"TagAssociationInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"addterm"},"addTerm"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Add a glossary term to a particular Entity or subresource"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#termassociationinput"},(0,a.kt)("code",null,"TermAssociationInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"creategroup"},"createGroup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#string"},"String")),(0,a.kt)("p",null,"Create a new group. Returns the urn of the newly created group. Requires Manage Users & Groups Platform Privilege"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#creategroupinput"},(0,a.kt)("code",null,"CreateGroupInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"createpolicy"},"createPolicy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#string"},"String")),(0,a.kt)("p",null,"Create a policy and returns the resulting urn"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#policyupdateinput"},(0,a.kt)("code",null,"PolicyUpdateInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"deletepolicy"},"deletePolicy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#string"},"String")),(0,a.kt)("p",null,"Remove an existing policy and returns the policy urn"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"urn",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/scalars#string"},(0,a.kt)("code",null,"String!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"removegroup"},"removeGroup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Remove a group. Requires Manage Users & Groups Platform Privilege"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"urn",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/scalars#string"},(0,a.kt)("code",null,"String!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"removegroupmembers"},"removeGroupMembers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Remove members from a group"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#removegroupmembersinput"},(0,a.kt)("code",null,"RemoveGroupMembersInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"removelink"},"removeLink"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Remove a link, or institutional memory, from a particular Entity"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#removelinkinput"},(0,a.kt)("code",null,"RemoveLinkInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"removeowner"},"removeOwner"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Remove an owner from a particular Entity"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#removeownerinput"},(0,a.kt)("code",null,"RemoveOwnerInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"removetag"},"removeTag"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Remove a tag from a particular Entity or subresource"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#tagassociationinput"},(0,a.kt)("code",null,"TagAssociationInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"removeterm"},"removeTerm"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Remove a glossary term from a particular Entity or subresource"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#termassociationinput"},(0,a.kt)("code",null,"TermAssociationInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"removeuser"},"removeUser"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Remove a user. Requires Manage Users & Groups Platform Privilege"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"urn",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/scalars#string"},(0,a.kt)("code",null,"String!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"updatechart"},"updateChart"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects#chart"},"Chart")),(0,a.kt)("p",null,"Update the metadata about a particular Chart"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"urn",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/scalars#string"},(0,a.kt)("code",null,"String!"))),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#chartupdateinput"},(0,a.kt)("code",null,"ChartUpdateInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"updatedashboard"},"updateDashboard"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects#dashboard"},"Dashboard")),(0,a.kt)("p",null,"Update the metadata about a particular Dashboard"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"urn",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/scalars#string"},(0,a.kt)("code",null,"String!"))),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#dashboardupdateinput"},(0,a.kt)("code",null,"DashboardUpdateInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"updatedataflow"},"updateDataFlow"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects#dataflow"},"DataFlow")),(0,a.kt)("p",null,"Update the metadata about a particular Data Flow (Pipeline)"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"urn",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/scalars#string"},(0,a.kt)("code",null,"String!"))),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#dataflowupdateinput"},(0,a.kt)("code",null,"DataFlowUpdateInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"updatedatajob"},"updateDataJob"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects#datajob"},"DataJob")),(0,a.kt)("p",null,"Update the metadata about a particular Data Job (Task)"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"urn",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/scalars#string"},(0,a.kt)("code",null,"String!"))),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#datajobupdateinput"},(0,a.kt)("code",null,"DataJobUpdateInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"updatedataset"},"updateDataset"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects#dataset"},"Dataset")),(0,a.kt)("p",null,"Update the metadata about a particular Dataset"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"urn",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/scalars#string"},(0,a.kt)("code",null,"String!"))),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#datasetupdateinput"},(0,a.kt)("code",null,"DatasetUpdateInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"updatedescription"},"updateDescription"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#boolean"},"Boolean")),(0,a.kt)("p",null,"Incubating. Updates the description of a resource. Currently only supports Dataset Schema Fields"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#descriptionupdateinput"},(0,a.kt)("code",null,"DescriptionUpdateInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"updatepolicy"},"updatePolicy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#string"},"String")),(0,a.kt)("p",null,"Update an existing policy and returns the resulting urn"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"urn",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/scalars#string"},(0,a.kt)("code",null,"String!"))),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#policyupdateinput"},(0,a.kt)("code",null,"PolicyUpdateInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"updatetag"},"updateTag"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects#tag"},"Tag")),(0,a.kt)("p",null,"Update the information about a particular Entity Tag"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"urn",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/scalars#string"},(0,a.kt)("code",null,"String!"))),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"input",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/inputObjects#tagupdateinput"},(0,a.kt)("code",null,"TagUpdateInput!"))),(0,a.kt)("td",null)))),(0,a.kt)("h2",{id:"updateuserstatus"},"updateUserStatus"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/scalars#string"},"String")),(0,a.kt)("p",null,"Change the status of a user. Requires Manage Users & Groups Platform Privilege"),(0,a.kt)("p",{style:{marginBottom:"0.4em"}},(0,a.kt)("strong",null,"Arguments")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"urn",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/scalars#string"},(0,a.kt)("code",null,"String!"))),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"status",(0,a.kt)("br",null),(0,a.kt)("a",{href:"/docs/graphql/enums#corpuserstatus"},(0,a.kt)("code",null,"CorpUserStatus!"))),(0,a.kt)("td",null)))))}i.isMDXComponent=!0}}]);