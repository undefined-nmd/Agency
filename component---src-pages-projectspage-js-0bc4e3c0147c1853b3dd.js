(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{250:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(237),l=a(239),o=(a(255),a(238)),s=a(240),i=a.n(s);a(253);var m=function(e){var t,n;function s(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navActive:!1},t.getNavState=function(){t.setState((function(e){return{navActive:!e.navActive}})),console.log("State change ! ! ! ")},t}return n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,s.prototype.render=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Assignments"}),r.a.createElement(l.a,{menustate:this.state.navActive,toggleNav:this.getNavState}),r.a.createElement("div",{className:"fixed-div"},r.a.createElement("div",{className:"toggle-nav reduce-width-float",onClick:this.getNavState},r.a.createElement("div",{className:"nav-line-top"}),r.a.createElement("div",{className:"nav-line-bottom"}))),r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"hero-img-detail"},r.a.createElement("h1",{className:"project-title-detail"},this.props.projecttitle),r.a.createElement("div",{className:"subtitles-detail"},r.a.createElement("h5",{className:"subtitle-text-detail"},"By undefined"),r.a.createElement("div",{className:"line-detail"}),r.a.createElement("h5",{className:"date-text-detail"},"2019"))),r.a.createElement("nav",null,r.a.createElement("a",{href:"/team"},"Team"),r.a.createElement("a",{href:"/contact"},"Contact"),r.a.createElement("a",{href:"/about"},"About"),r.a.createElement("a",{href:"/projectspage"},"Projects"))),r.a.createElement("div",{className:"main-container"},r.a.createElement("p",{className:"project-intro"},"A brief intro about the project comes here. A brief intro about the project comes here. A brief intro about the project comes here."),r.a.createElement("div",{className:"content-box"},r.a.createElement("h3",{className:"project-subtitle"},"Visual identity"),r.a.createElement("p",{className:"project-text"},"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text."))),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:a(251),alt:"",className:"project-image-sm"}),r.a.createElement("img",{src:a(251),alt:"",className:"project-image-sm"}),r.a.createElement("img",{src:a(251),alt:"",className:"project-image-sm"}),r.a.createElement("img",{src:a(251),alt:"",className:"project-image-sm"})),r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"content-box"},r.a.createElement("h3",{className:"project-subtitle"},"Services"),r.a.createElement("ul",{className:"project-text"},r.a.createElement("li",null,"Brand identity"),r.a.createElement("li",null,"UI / UX design"),r.a.createElement("li",null,"Visual design"),r.a.createElement("li",null,"Development"))),r.a.createElement("div",{className:"contact-action"},r.a.createElement("p",{className:"action-title"},"Let us define your next project"),r.a.createElement("a",{href:"",className:"action-button"},"Contact us")),r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-container-left"},r.a.createElement("ul",null,r.a.createElement("li",null,"Contact"),r.a.createElement("li",null,"Social"))),r.a.createElement("ul",{className:"footer-container-center"},r.a.createElement("li",{className:"footer-info-general"},r.a.createElement("span",{className:"footer-info-general"},"info@arteveldehs.be / 09 234 86 00")),r.a.createElement("li",{className:"footer-info-general"},r.a.createElement("span",{className:"footer-info-general"},"Instagram / Facebook / LinkedIn / Twitter")),r.a.createElement("li",{className:"footer-info-general"},"Hoogpoort 15"),r.a.createElement("li",{className:"footer-info-general"},"9000 Gent"),r.a.createElement("li",{className:"footer-info-general"},"ONnr: 0474.120.360"),r.a.createElement("li",{className:"footer-info-general"},"BTWnr: BTW BE 0474.120.360")),r.a.createElement("div",{className:"blank"}),r.a.createElement("div",{className:"undefined-copyright"},"_defined"))))},s}(n.Component);var d=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={navActive:!1,projects:[],id:!1,projectTitle:"",projectBody:""},t.setStateId=function(e){var a=e.data.title,n=e.data.body;t.setState({id:!0,projectTitle:a,projectBody:n})},t.getNavState=function(){t.setState((function(e){return{navActive:!e.navActive}})),console.log("State change ! ! ! ")},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.componentDidMount=function(){var e=this;i.a.get("https://undefined-baas.firebaseapp.com/api/projects").then((function(t){e.setState({projects:t.data.data})}))},s.render=function(){var e=this;return this.state.id?r.a.createElement(m,{projecttitle:this.state.projectTitle}):r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement(l.a,{menustate:this.state.navActive,toggleNav:this.getNavState}),r.a.createElement("div",{className:"main-container-project-list"},r.a.createElement("div",{className:"toggle-nav reduce-width-float add-fixed",onClick:this.getNavState},r.a.createElement("div",{className:"nav-line-top"}),r.a.createElement("div",{className:"nav-line-bottom"})),this.state&&this.state.projects&&this.state.projects.map((function(t,a){return r.a.createElement("div",{className:"project-list-container",key:a},r.a.createElement("h2",{className:"project-list-title"},t.data.title),r.a.createElement("div",{className:"project-list-row"},r.a.createElement("img",{src:t.data.pictures.reference_md?t.data.pictures.reference_md:"https://firebasestorage.googleapis.com/v0/b/undefined-baas.appspot.com/o/resized%2Ftumblr_n7jz4u5Fgd1ql2g28o1_500_1280x1280.jpg?alt=media&token=16672718-2b3c-493f-a1f0-f6cab1d8eaaa",className:"project-list-image"}),r.a.createElement("a",{className:"action-button edit-height",onClick:function(){return e.setStateId(t)}},"View project")),r.a.createElement("p",{className:"project-list-slug"},t.data.synopsis?t.data.synopsis:""))}))))},n}(n.Component);t.default=d},251:function(e,t,a){e.exports=a.p+"static/tumblr_n7jz4u5Fgd1ql2g28o1_500-7f153ace738718b92c148144c97160ca.jpg"}}]);
//# sourceMappingURL=component---src-pages-projectspage-js-0bc4e3c0147c1853b3dd.js.map