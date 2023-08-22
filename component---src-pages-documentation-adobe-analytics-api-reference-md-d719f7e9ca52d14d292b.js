"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2546],{14219:function(e,t,i){i.r(t),i.d(t,{_frontmatter:function(){return l},default:function(){return c}});var n=i(87462),r=i(63366),a=(i(15007),i(64983)),o=i(91515),d=i(70231),s=["components"],l={},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",t)}},u=m("InlineAlert"),p=m("TabsBlock"),h={_frontmatter:l},x=o.Z;function c(e){var t=e.components,i=(0,r.Z)(e,s);return(0,a.mdx)(x,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"analytics-api-reference"},"Analytics API reference"),(0,a.mdx)("h2",{id:"clearqueue"},"clearQueue"),(0,a.mdx)("p",null,"Force delete, without sending to Analytics, all hits being stored or batched on the SDK."),(0,a.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"Use caution when manually clearing the queue. This operation cannot be reverted."),(0,a.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"Android"),(0,a.mdx)(d.default,{query:"platform=android&api=clear-queue",mdxType:"Tabs"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(d.default,{query:"platform=ios&api=clear-queue",mdxType:"Tabs"}),(0,a.mdx)("h2",{id:"extensionversion"},"extensionVersion"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"extensionVersion()")," API returns the version of the Analytics extension that is registered with the Mobile Core extension."),(0,a.mdx)("p",null,"To get the version of the Analytics extension, use the following code sample:"),(0,a.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"Android"),(0,a.mdx)(d.default,{query:"platform=android&api=extension-version",mdxType:"Tabs"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(d.default,{query:"platform=ios&api=extension-version",mdxType:"Tabs"}),(0,a.mdx)("h2",{id:"getqueuesize"},"getQueueSize"),(0,a.mdx)("p",null,"Retrieves the total number of Analytics hits in the tracking queue."),(0,a.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"Android"),(0,a.mdx)(d.default,{query:"platform=android&api=get-queue-size",mdxType:"Tabs"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(d.default,{query:"platform=ios&api=get-queue-size",mdxType:"Tabs"}),(0,a.mdx)("h2",{id:"getqueuesizewithcompletionhandler"},"getQueueSizeWithCompletionHandler"),(0,a.mdx)("p",null,"Retrieves the total number of Analytics hits in the tracking queue. Invoke the callback with NSError if an unexpected error occurs or the request times out."),(0,a.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(d.default,{query:"platform=ios&api=get-queue-size-with-completion-handler",mdxType:"Tabs"}),(0,a.mdx)("h2",{id:"gettrackingidentifier"},"getTrackingIdentifier"),(0,a.mdx)("p",null,"Retrieves the Analytics tracking identifier that is generated for this app/device instance. This identifier is an app-specific, unique visitor ID that is generated at the initial launch and is stored and used after the initial launch. The ID is preserved between app upgrades and is removed when the app is uninstalled as well as on ",(0,a.mdx)("a",{parentName:"p",href:"#resetidentities"},"MobileCore.resetIdentities")," API call or on privacy status opt out."),(0,a.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"Starting with v1.2.9 (Android) / v3.0.3(iOS AEPAnalytics) / v2.5.1 (iOS ACPAnalytics) this API does not generate or retrieve a new tracking identifier (AID) for new visitors. For the visitors which have an AID previously generated will continue retrieve the AID value with this API, and new users will use the ECID (MID) value as the primary identity.",(0,a.mdx)("br",null),(0,a.mdx)("br",null),"Before using this API, see the documentation on identifying ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html"},"unique visitors"),"."),(0,a.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"Android"),(0,a.mdx)(d.default,{query:"platform=android&api=get-tracking-identifier",mdxType:"Tabs"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(d.default,{query:"platform=ios&api=get-tracking-identifier",mdxType:"Tabs"}),(0,a.mdx)("h2",{id:"gettrackingidentifierwithcompletionhandler"},"getTrackingIdentifierWithCompletionHandler"),(0,a.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"Starting with v1.2.9 (Android) / v3.0.3(iOS AEPAnalytics) / v2.5.1 (iOS ACPAnalytics) this API does not generate or retrieve a new tracking identifier (AID) for new visitors. For the visitors which have an AID previously generated will continue retrieve the AID value with this API, and new users will use the ECID (MID) value as the primary identity.",(0,a.mdx)("br",null),(0,a.mdx)("br",null),"Before you use this API, please read the documentation on ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html"},"identifying unique visitors"),"."),(0,a.mdx)("p",null,"Retrieves the Analytics tracking identifier that is generated for this app/device instance. This identifier is an app-specific, unique visitor ID that is generated at the initial launch and is stored and used after the initial launch. The ID is preserved between app upgrades and is removed when the app is uninstalled. Invoke the callback with NSError if an unexpected error occurs or the request times out."),(0,a.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"If you have an ",(0,a.mdx)("a",{parentName:"p",href:"../mobile-core/identity/api-reference.md#getexperiencecloudid"},"Experience Cloud ID")," and have not yet configured a visitor ID grace period, the value returned by ",(0,a.mdx)("inlineCode",{parentName:"p"},"getTrackingIdentifier")," may be null."),(0,a.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(d.default,{query:"platform=ios&api=get-tracking-identifier-with-completion-handler",mdxType:"Tabs"}),(0,a.mdx)("h2",{id:"getvisitoridentifier"},"getVisitorIdentifier"),(0,a.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"Before using this API, please read the documentation on ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html"},"identifying unique visitors"),"."),(0,a.mdx)("p",null,"This API gets a custom Analytics visitor identifier, which has been set previously using ",(0,a.mdx)("a",{parentName:"p",href:"#setvisitoridentifier"},"setVisitorIdentifier"),"."),(0,a.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"Android"),(0,a.mdx)(d.default,{query:"platform=android&api=get-visitor-identifier",mdxType:"Tabs"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(d.default,{query:"platform=ios&api=get-visitor-identifier",mdxType:"Tabs"}),(0,a.mdx)("h2",{id:"getvisitoridentifierwithcompletionhandler"},"getVisitorIdentifierWithCompletionHandler"),(0,a.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"Before using this API, see ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html"},"Identify unique visitors"),"."),(0,a.mdx)("p",null,"This API gets a custom Analytics visitor identifier, which has been set previously using ",(0,a.mdx)("a",{parentName:"p",href:"#setvisitoridentifier"},"setVisitorIdentifier"),". Callback with NSError if an unexpected error occurs or the request times out."),(0,a.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(d.default,{query:"platform=ios&api=get-visitor-identifier-with-completion-handler",mdxType:"Tabs"}),(0,a.mdx)("h2",{id:"registerextension"},"registerExtension"),(0,a.mdx)("p",null,"Registers the Analytics extension with the Mobile Core SDK."),(0,a.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"Deprecated as of 2.0.0. Please use the ",(0,a.mdx)("a",{parentName:"p",href:"../mobile-core/api-reference.md#registerextensions"},"MobileCore.registerExtensions")," API instead."),(0,a.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"Android"),(0,a.mdx)(d.default,{query:"platform=android&api=register-extension",mdxType:"Tabs"}),(0,a.mdx)("h2",{id:"resetidentities"},"resetIdentities"),(0,a.mdx)("p",null,"Clears the identities stored in the Analytics extension - ",(0,a.mdx)("inlineCode",{parentName:"p"},"tracking identifier (AID)")," and the ",(0,a.mdx)("inlineCode",{parentName:"p"},"custom visitor identifiers (VID)")," stored in the Analytics extension and force deletes, without sending to Analytics, all hits being stored or batched on the SDK."),(0,a.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"Support for this API was added in: ",(0,a.mdx)("ul",null,(0,a.mdx)("li",null,"Android Analytics version 1.2.9"),(0,a.mdx)("li",null,"iOS AEPAnalytics version 3.0.3")),(0,a.mdx)("br",null),"See ",(0,a.mdx)("a",{parentName:"p",href:"../mobile-core/api-reference.md#resetidentities"},"MobileCore.resetIdentities")," for more details."),(0,a.mdx)("h2",{id:"sendqueuedhits"},"sendQueuedHits"),(0,a.mdx)("p",null,"Sends all queued hits to Analytics, regardless of the current hit batch settings."),(0,a.mdx)("p",null,"This method forces the library to send all hits in the offline queue, regardless of how many hits are currently queued."),(0,a.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"Use caution when manually clearing the queue. This operation cannot be reverted."),(0,a.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"Android"),(0,a.mdx)(d.default,{query:"platform=android&api=send-queued-hits",mdxType:"Tabs"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(d.default,{query:"platform=ios&api=send-queued-hits",mdxType:"Tabs"}),(0,a.mdx)("h2",{id:"setvisitoridentifier"},"setVisitorIdentifier"),(0,a.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"Before using this API, see ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html"},"Identify unique visitors"),"."),(0,a.mdx)("p",null,"Sets a custom Analytics visitor identifier. For more information, see ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/visitorid.html"},"Custom Visitor ID"),"."),(0,a.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"Android"),(0,a.mdx)(d.default,{query:"platform=android&api=set-visitor-identifier",mdxType:"Tabs"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(d.default,{query:"platform=ios&api=set-visitor-identifier",mdxType:"Tabs"}))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-analytics-api-reference-md-d719f7e9ca52d14d292b.js.map