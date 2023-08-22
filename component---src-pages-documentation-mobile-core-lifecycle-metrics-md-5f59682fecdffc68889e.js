"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4419],{92145:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(87462),r=a(63366),d=(a(15007),a(64983)),m=a(91515),i=["components"],l={},p={_frontmatter:l},o=m.Z;function s(e){var t=e.components,a=(0,r.Z)(e,i);return(0,d.mdx)(o,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"lifecycle-metrics"},"Lifecycle metrics"),(0,d.mdx)("h2",{id:"lifecycle-data-content-response-metrics"},"Lifecycle data content response metrics"),(0,d.mdx)("p",null,"The following metrics are collected on each ",(0,d.mdx)("a",{parentName:"p",href:"./event-reference.md#lifecycle-data-content-response"},"Lifecycle data content response")," event."),(0,d.mdx)("h3",{id:"install"},"Install"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Metric")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Key")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Description")))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"First Launches"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.InstallEvent")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Triggered at the first run after installation or re-installation.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Install Date"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.InstallDate")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Date of first launch after installation. The format is ",(0,d.mdx)("inlineCode",{parentName:"td"},"M/d/yyyy"),", and an example is ",(0,d.mdx)("inlineCode",{parentName:"td"},"5/3/2017"),".")))),(0,d.mdx)("h3",{id:"upgrade"},"Upgrade"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Metric")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Key")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Description")))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Upgrades"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.UpgradeEvent")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Triggered at the first run after upgrade or when the version number changes.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Days since last upgrade"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.DaysSinceLastUpgrade")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Number of days since the application version number changed. ",(0,d.mdx)("br",null),(0,d.mdx)("br",null)," ",(0,d.mdx)("strong",{parentName:"td"},"Important"),": This metric is ",(0,d.mdx)("strong",{parentName:"td"},"not")," automatically stored in an Analytics metric. You must create a processing rule that sets a custom event to capture this metric.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Launches since last upgrade"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.LaunchesSinceUpgrade")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Number of launches since the application version number changed. ",(0,d.mdx)("br",null),(0,d.mdx)("br",null)," ",(0,d.mdx)("strong",{parentName:"td"},"Important"),": This metric is ",(0,d.mdx)("strong",{parentName:"td"},"not")," automatically stored in an Analytics metric. You must create a processing rule that sets a custom event to capture this metric.")))),(0,d.mdx)("h3",{id:"launch"},"Launch"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Metric")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Key")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Description")))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Daily Engaged Users"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.DailyEngUserEvent")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Triggered when the application is used on a particular day.",(0,d.mdx)("br",null),(0,d.mdx)("br",null)," ",(0,d.mdx)("strong",{parentName:"td"},"Important"),": This metric is ",(0,d.mdx)("strong",{parentName:"td"},"not")," automatically stored in an Analytics metric. You must create a processing rule that sets a custom event to capture this metric.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Monthly Engaged Users"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.MonthlyEngUserEvent")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Triggered when the application is used during a particular month.",(0,d.mdx)("br",null),(0,d.mdx)("br",null)," ",(0,d.mdx)("strong",{parentName:"td"},"Important"),": This metric is ",(0,d.mdx)("strong",{parentName:"td"},"not")," automatically stored in an Analytics metric. You must create a processing rule that sets a custom event to capture this metric.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Launches"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.LaunchEvent")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Triggered on every run, including crashes and installs. Also triggered when the app is resumed from the background after the lifecycle session timeout is exceeded.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Previous Session Length"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.PrevSessionLength")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Reports the number of seconds that a previous application session lasted based on how long the application was open and in the foreground.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Ignored Session Length"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.ignoredSessionLength")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"If the last session is set to last longer than ",(0,d.mdx)("inlineCode",{parentName:"td"},"lifecycle.sessionTimeout"),", that session length is ignored and recorded here.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Launch Number"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.Launches")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Number of times the application was launched or brought out of the background.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Days since first use"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.DaysSinceFirstUse")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Number of days since first run.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Days since last use"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.DaysSinceLastUse")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Number of days since last use.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Hour of Day"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.HourOfDay")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Measures the hour the app was launched and uses the 24-hour numerical format. Used for time parting to determine peak usage times.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Day of Week"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.DayOfWeek")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Measures the day of the week the app was launched.")))),(0,d.mdx)("h3",{id:"crash"},"Crash"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Metric")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Key")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Description")))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Crashes"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.CrashEvent")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Triggered when the application crashed before closing. The event is sent when the application is started again after the crash.")))),(0,d.mdx)("h3",{id:"device-information"},"Device information"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Metric")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Key")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Description")))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"App ID"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.AppId")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Stores the application name and version in the following format: ",(0,d.mdx)("inlineCode",{parentName:"td"},"AppName BundleVersion (app version code)"),". An example of this format is ",(0,d.mdx)("inlineCode",{parentName:"td"},"MyAppName 1.1(1)"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Device name"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.DeviceName")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Store the device name.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Operating system version"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.OSVersion")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Stores the operating system's name and version.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Carrier name"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.CarrierName")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Stores the name of the mobile service provider as provided by the device. ",(0,d.mdx)("br",null),(0,d.mdx)("br",null)," ",(0,d.mdx)("strong",{parentName:"td"},"Important:")," This metric is ",(0,d.mdx)("strong",{parentName:"td"},"not")," automatically stored in an Analytics variable. You must create a processing rule to copy this value to an Analytics variable for reporting.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Resolution"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.Resolution")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The width x height in pixels.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Locale"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.locale")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The locale set for the application. For example, ",(0,d.mdx)("inlineCode",{parentName:"td"},"en-US"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"System Locale"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"a.systemLocale")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The locale set for this device. For example, ",(0,d.mdx)("inlineCode",{parentName:"td"},"en-US"),".")))),(0,d.mdx)("h2",{id:"lifecycle-application-foreground-metrics"},"Lifecycle Application Foreground metrics"),(0,d.mdx)("p",null,"The following metrics are collected on each ",(0,d.mdx)("a",{parentName:"p",href:"./event-reference.md#lifecycle-application-foreground"},"Lifecycle Application Foreground")," event. The structure of these metrics is defined in the Experience Data Model (XDM) field group ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/adobe/xdm/blob/master/docs/reference/adobe/experience/aep-mobile-lifecycle-details.schema.md"},"AEP Mobile Lifecycle Details"),"."),(0,d.mdx)("h3",{id:"application"},"Application"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Property")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Type")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Description")))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:id"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Identifier of the application.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:name"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Name of the application.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:version"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Version of the application.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:isLaunch"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Launch of an application. Every application foreground event sets ",(0,d.mdx)("inlineCode",{parentName:"td"},"isLaunch")," to ",(0,d.mdx)("inlineCode",{parentName:"td"},"true"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:isInstall"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Install of an application. If ",(0,d.mdx)("inlineCode",{parentName:"td"},"true"),", signifies the first launch of the application. The Experience Event's timestamp property can be used as the application's install date.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:isUpgrade"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Upgrade of an application. If ",(0,d.mdx)("inlineCode",{parentName:"td"},"true"),", signifies the first launch of the application after an upgrade.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"dc:language"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The language of the application to represent the user's linguistic, geographical, or cultural preferences for data presentation.")))),(0,d.mdx)("h3",{id:"device"},"Device"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Property")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Type")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Description")))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:type"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Type of device being tracked.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:manufacturer"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The name of the organization who owns the design and creation of the device.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:model"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The name of the model for the device.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:modelNumber"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The unique model number designation assigned by the manufacturer for this device.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:screenHeight"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"integer"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The number of vertical pixels of the device's active display in the default orientation.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:screenWidth"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"integer"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The number of horizontal pixels of the device's active display in the default orientation.")))),(0,d.mdx)("h3",{id:"environment"},"Environment"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Property")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Type")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Description")))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:type"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The type of the application environment.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:carrier"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"A mobile network carrier or MNO, also known as a wireless service provider, wireless carrier, cellular company, or mobile network carrier.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:operatingSystem"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The name of the operating system used when the observation was made.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:operatingSystemVersion"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The full version identifier for the operating system used when the observation was made.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"dc:language"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The language of the environment to represent the user's linguistic, geographical, or cultural preferences for data presentation.")))),(0,d.mdx)("h2",{id:"lifecycle-application-background-metrics"},"Lifecycle Application Background metrics"),(0,d.mdx)("p",null,"The following metrics are collected on each ",(0,d.mdx)("a",{parentName:"p",href:"./event-reference.md#lifecycle-application-background"},"Lifecycle Application Background")," event. The structure of these metrics is defined in the Experience Data Model (XDM) field group ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/adobe/xdm/blob/master/docs/reference/adobe/experience/aep-mobile-lifecycle-details.schema.md"},"AEP Mobile Lifecycle Details"),"."),(0,d.mdx)("h3",{id:"application-1"},"Application"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Property")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Type")),(0,d.mdx)("th",{parentName:"tr",align:"left"},(0,d.mdx)("strong",{parentName:"th"},"Description")))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:isClose"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Close of an application. Every application background event sets ",(0,d.mdx)("inlineCode",{parentName:"td"},"isClose")," to ",(0,d.mdx)("inlineCode",{parentName:"td"},"true"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:closeType"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,d.mdx)("td",{parentName:"tr",align:"left"},'Type of application close, sent on application isClose. Type is "close" on graceful termination of an application, or "unknown" when application termination source is unknown.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"xdm:sessionLength"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"integer"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Length of the application session in seconds. Usually referred as the time the application was in foreground. Will not be less than zero.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-mobile-core-lifecycle-metrics-md-5f59682fecdffc68889e.js.map