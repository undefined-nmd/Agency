(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{250:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(239),l=a(240),s=(a(254),a(238)),o=a(241),i=a.n(o);a(255);var m=function(e){var t,n;function o(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).state={navActive:!1},t.getNavState=function(){t.setState((function(e){return{navActive:!e.navActive}})),console.log("State change ! ! ! ")},t}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){return c.a.createElement(r.a,null,c.a.createElement(s.a,{title:"Assignments"}),c.a.createElement(l.a,{menustate:this.state.navActive,toggleNav:this.getNavState}),c.a.createElement("div",{className:"fixed-div"},c.a.createElement("div",{className:"toggle-nav reduce-width-float",onClick:this.getNavState},c.a.createElement("div",{className:"nav-line-top"}),c.a.createElement("div",{className:"nav-line-bottom"}))),c.a.createElement("div",{className:"header-container"},c.a.createElement("div",{className:"hero-img-detail"},c.a.createElement("h1",{className:"project-title-detail"},"Snak the museum"),c.a.createElement("div",{className:"subtitles-detail"},c.a.createElement("h5",{className:"subtitle-text-detail"},"By undefined"),c.a.createElement("div",{className:"line-detail"}),c.a.createElement("h5",{className:"date-text-detail"},"2019"))),c.a.createElement("nav",null,c.a.createElement("a",{href:"/team"},"Team"),c.a.createElement("a",{href:"/contact"},"Contact"),c.a.createElement("a",{href:"/about"},"About"),c.a.createElement("a",{href:"/projectspage"},"Projects"))),c.a.createElement("div",{className:"main-container"},c.a.createElement("p",{className:"project-intro"},"A brief intro about the project comes here. A brief intro about the project comes here. A brief intro about the project comes here."),c.a.createElement("div",{className:"content-box"},c.a.createElement("h3",{className:"project-subtitle"},"Visual identity"),c.a.createElement("p",{className:"project-text"},"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text."))),c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{src:a(251),alt:"",className:"project-image-sm"}),c.a.createElement("img",{src:a(251),alt:"",className:"project-image-sm"}),c.a.createElement("img",{src:a(251),alt:"",className:"project-image-sm"}),c.a.createElement("img",{src:a(251),alt:"",className:"project-image-sm"})),c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"content-box"},c.a.createElement("h3",{className:"project-subtitle"},"Services"),c.a.createElement("ul",{className:"project-text"},c.a.createElement("li",null,"Brand identity"),c.a.createElement("li",null,"UI / UX design"),c.a.createElement("li",null,"Visual design"),c.a.createElement("li",null,"Development"))),c.a.createElement("div",{className:"contact-action"},c.a.createElement("p",{className:"action-title"},"Let us define your next project"),c.a.createElement("a",{href:"",className:"action-button"},"Contact us")),c.a.createElement("footer",null,c.a.createElement("div",{className:"footer-container-left"},c.a.createElement("ul",null,c.a.createElement("li",null,"Contact"),c.a.createElement("li",null,"Social"))),c.a.createElement("ul",{className:"footer-container-center"},c.a.createElement("li",{className:"footer-info-general"},c.a.createElement("span",{className:"footer-info-general"},"info@arteveldehs.be / 09 234 86 00")),c.a.createElement("li",{className:"footer-info-general"},c.a.createElement("span",{className:"footer-info-general"},"Instagram / Facebook / LinkedIn / Twitter")),c.a.createElement("li",{className:"footer-info-general"},"Hoogpoort 15"),c.a.createElement("li",{className:"footer-info-general"},"9000 Gent"),c.a.createElement("li",{className:"footer-info-general"},"ONnr: 0474.120.360"),c.a.createElement("li",{className:"footer-info-general"},"BTWnr: BTW BE 0474.120.360")),c.a.createElement("div",{className:"blank"}),c.a.createElement("div",{className:"undefined-copyright"},"_defined"))))},o}(n.Component);var d=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).state={navActive:!1,projects:[],id:null},t.setStateId=function(e){t.setState({id:e})},t.getNavState=function(){t.setState((function(e){return{navActive:!e.navActive}})),console.log("State change ! ! ! ")},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){var e=this;i.a.get("https://undefined-baas.firebaseapp.com/api/projects").then((function(t){console.log(t.data.data),e.setState({projects:t.data.data})}))},o.render=function(){var e=this;return null==this.state.id?c.a.createElement(r.a,null,c.a.createElement(s.a,{title:"Home"}),c.a.createElement(l.a,{menustate:this.state.navActive,toggleNav:this.getNavState}),c.a.createElement("div",{className:"main-container-project-list"},c.a.createElement("div",{className:"toggle-nav reduce-width-float",onClick:this.getNavState},c.a.createElement("div",{className:"nav-line-top"}),c.a.createElement("div",{className:"nav-line-bottom"})),this.state&&this.state.projects&&this.state.projects.map((function(t,a){return c.a.createElement("div",{className:"project-list-container",key:a},c.a.createElement("h2",{className:"project-list-title"},t.data.title),c.a.createElement("div",{className:"project-list-row"},c.a.createElement("img",{src:t.data.pictures.reference_md?t.data.pictures.reference_md:"https://firebasestorage.googleapis.com/v0/b/undefined-baas.appspot.com/o/resized%2Ftumblr_n7jz4u5Fgd1ql2g28o1_500_1280x1280.jpg?alt=media&token=16672718-2b3c-493f-a1f0-f6cab1d8eaaa",className:"project-list-image"}),c.a.createElement("a",{href:"/",className:"action-button edit-height",onClick:function(){return e.setStateId(t.id)}},"View project")),c.a.createElement("p",{className:"project-list-slug"},t.data.synopsis?t.data.synopsis:""))})))):c.a.createElement(m,null)},n}(n.Component);t.default=d},251:function(e,t,a){e.exports=a.p+"static/tumblr_n7jz4u5Fgd1ql2g28o1_500-7f153ace738718b92c148144c97160ca.jpg"}}]);
//# sourceMappingURL=component---src-pages-projectspage-js-6b3ac6733c7deaae4513.js.map