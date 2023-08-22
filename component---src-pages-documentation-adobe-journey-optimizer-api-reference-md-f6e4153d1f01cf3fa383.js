"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2445],{91691:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var i=n(87462),a=n(63366),o=(n(15007),n(64983)),d=n(91515),s=n(1374),r=["components"],l={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)}},m=p("TabsBlock"),u=p("InlineAlert"),x={_frontmatter:l},h=d.Z;function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.mdx)(h,(0,i.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"adobe-journey-optimizer-api-reference"},"Adobe Journey Optimizer API reference"),(0,o.mdx)("h2",{id:"extensionversion"},"extensionVersion"),(0,o.mdx)("p",null,"The extensionVersion API returns the library version."),(0,o.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(s.default,{query:"platform=android&api=extension-version",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(s.default,{query:"platform=ios&api=extension-version",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"handlenotificationresponse"},"handleNotificationResponse"),(0,o.mdx)("p",null,"The handleNotificationResponse function transmits the push notification interaction feedback."),(0,o.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(s.default,{query:"platform=android&api=handle-notification-response",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(s.default,{query:"platform=ios&api=handle-notification-response",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"registerextension"},"registerExtension"),(0,o.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Deprecated as of 2.0.0. Please use the ",(0,o.mdx)("a",{parentName:"p",href:"../mobile-core/api-reference.md#registerextensions"},"MobileCore.registerExtensions")," API instead."),(0,o.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(s.default,{query:"platform=android&api=register-extension",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"refreshinappmessages"},"refreshInAppMessages"),(0,o.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"By default, the SDK will automatically fetch in-app message definitions from the remote at the time the Messaging extension is registered. This generally happens once per app lifecycle."),(0,o.mdx)("p",null,"Some use cases may require the client to request an update from the remote more frequently. Calling the following API will force the Messaging extension to get an updated definition of messages from the remote:"),(0,o.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(s.default,{query:"platform=android&api=refresh",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(s.default,{query:"platform=ios&api=refresh",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"setpushidentifier"},"setPushIdentifier"),(0,o.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Although this API is provided in Mobile Core, the use of this API is required and leveraged by the Adobe Journey Optimizer extension to sync provided push tokens with Adobe Experience Platform services."),(0,o.mdx)("p",null,"The setPushIdentifier API sets the push token, allowing you to sync it with Profile in Adobe Experience Platform."),(0,o.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(s.default,{query:"platform=android&api=set-push-identifier",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(s.default,{query:"platform=ios&api=set-push-identifier",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"addpushtrackingdetails"},"addPushTrackingDetails"),(0,o.mdx)("p",null,"The addPushTrackingDetails API is used to update a pending intent with important information, such as messageId and Customer Journey information. "),(0,o.mdx)(u,{variant:"help",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Calling this API is mandatory, so the pending intent can be used while tracking push notification interactions."),(0,o.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(s.default,{query:"platform=android&api=add-push-tracking-details",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"public-classes"},"Public classes"),(0,o.mdx)("h3",{id:"messagingpushpayload"},"MessagingPushPayload"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"MessagePushPayload")," is a helper class for extracting the data payload attributes from ",(0,o.mdx)("inlineCode",{parentName:"p"},"RemoteMessage"),", which are used while creating the push notification. "),(0,o.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(s.default,{query:"platform=android&api=messaging-push-payload",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"public-apis"},"Public APIs"),(0,o.mdx)("p",null,"Public APIs are used to get attributes from the push payload, which are used while creating the push notification."),(0,o.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(s.default,{query:"platform=android&api=public-apis",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"payload-keys"},"Payload keys"),(0,o.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(s.default,{query:"platform=android&api=payload-keys",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(s.default,{query:"platform=ios&api=payload-keys",mdxType:"Tabs"}))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-journey-optimizer-api-reference-md-f6e4153d1f01cf3fa383.js.map