(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{184:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(190),s=a(194),l=(a(199),a(191));var o=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).state={navActive:!1},t.getNavState=function(){t.setState(function(e){return{navActive:!e.navActive}}),console.log("State change ! ! ! ")},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return c.a.createElement(r.a,null,c.a.createElement(l.a,{title:"Home"}),c.a.createElement("div",{className:"container"},c.a.createElement(s.a,{menustate:this.state.navActive,toggleNav:this.getNavState}),c.a.createElement("div",{className:"hero-img"},c.a.createElement("div",{className:"hero-child"},c.a.createElement("h1",{className:"project-title"},"Snek the museum"),c.a.createElement("div",{className:"subtitles"},c.a.createElement("h5",{className:"subtitle-text"},"UX / UI"),c.a.createElement("div",{className:"line"}),c.a.createElement("h5",{className:"date-text"},"2019")))),c.a.createElement("div",{className:"content-div"},c.a.createElement("div",{className:"content-child"},c.a.createElement("div",{className:"toggle-nav position-right-nav",onClick:this.getNavState},c.a.createElement("div",{className:"toggle-nav-child-cont"},c.a.createElement("div",{className:"nav-line-top"}),c.a.createElement("div",{className:"nav-line-bottom"}))),c.a.createElement("h2",{className:"brand-title"},"_defined"),c.a.createElement("h4",{className:"baseline"},"We ",c.a.createElement("span",null,"Build")," ",c.a.createElement("span",null,"Digital")," ",c.a.createElement("span",null,"Stuff"))))))},n}(n.Component);t.default=o},190:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(195);t.a=function(e){var t=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},c.a.createElement("main",null,t)))}},191:function(e,t,a){"use strict";var n=a(192),c=a(0),r=a.n(c),s=a(196),l=a.n(s);function o(e){var t=e.description,a=e.lang,c=e.meta,s=e.title,o=n.data.site,i=t||o.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:s},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:i}].concat(c)})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},192:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},194:function(e,t,a){"use strict";a(47),a(6);var n=a(0),c=a.n(n);var r=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e="show-nav",t="hide-nav",a=this.props.menustate;return c.a.createElement("div",{menustate:a.toString(),className:a?e:t},c.a.createElement("div",{className:"close-nav",onClick:this.props.toggleNav},c.a.createElement("div",{className:"close-nav-top"}),c.a.createElement("div",{className:"close-nav-bottom"})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("a",{className:"nav-links",href:"/teamPage"},"Team"),c.a.createElement("a",{className:"nav-links",href:"/projectspage"},"Projects"),c.a.createElement("a",{className:"nav-links",href:"/about"},"About"),c.a.createElement("a",{className:"nav-links",href:"/contact"},"Contact"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("p",{className:"nav-p"},"Please tell us about your future project"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("a",{href:"/contact",className:"button-contact-us"},"Contact us")),c.a.createElement("a",{href:"/#",className:"undefined-copyright-contact"},"_defined")))},n}(n.Component);t.a=r}}]);
//# sourceMappingURL=component---src-pages-index-js-010b5ba4003bd45e89aa.js.map