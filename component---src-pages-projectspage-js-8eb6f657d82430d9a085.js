(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{249:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(237),r=a(239),s=(a(254),a(238)),o=a(240),i=a.n(o);a(255);var m=function(e){var t,n;function o(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).state={navActive:!1},t.getNavState=function(){t.setState((function(e){return{navActive:!e.navActive}})),console.log("State change ! ! ! ")},t}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){return c.a.createElement(l.a,null,c.a.createElement(s.a,{title:"Assignments"}),c.a.createElement(r.a,{menustate:this.state.navActive,toggleNav:this.getNavState}),c.a.createElement("div",{className:"fixed-div"},c.a.createElement("div",{className:"toggle-nav reduce-width-float",onClick:this.getNavState},c.a.createElement("div",{className:"nav-line-top"}),c.a.createElement("div",{className:"nav-line-bottom"}))),c.a.createElement("div",{className:"header-container"},c.a.createElement("div",{className:"hero-img-detail"},c.a.createElement("h1",{className:"project-title-detail"},this.props.projecttitle),c.a.createElement("div",{className:"subtitles-detail"},c.a.createElement("h5",{className:"subtitle-text-detail"},"By undefined"),c.a.createElement("div",{className:"line-detail"}),c.a.createElement("h5",{className:"date-text-detail"},"2019")))),c.a.createElement("div",{className:"main-container"},c.a.createElement("p",{className:"project-intro"},this.props.projectsynopsis),c.a.createElement("div",{className:"content-box"},c.a.createElement("h3",{className:"project-subtitle"},"Visual identity"),c.a.createElement("p",{className:"project-text"},this.props.projectbody))),c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{src:a(250),alt:"",className:"project-image-sm"}),c.a.createElement("img",{src:a(250),alt:"",className:"project-image-sm"}),c.a.createElement("img",{src:a(250),alt:"",className:"project-image-sm"}),c.a.createElement("img",{src:a(250),alt:"",className:"project-image-sm"})),c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"contact-action"},c.a.createElement("p",{className:"action-title"},"Let us define your next project"),c.a.createElement("a",{href:"/contact",className:"action-button"},"Contact us")),c.a.createElement("footer",null,c.a.createElement("div",{className:"footer-container-left"},c.a.createElement("h2",null,"Contact"),c.a.createElement("ul",null,c.a.createElement("li",{className:"footer-info-general"},"Hoogpoort 15"),c.a.createElement("li",{className:"footer-info-general"},"9000 Gent"),c.a.createElement("li",null,c.a.createElement("a",{className:"footer-info-general",href:"mailto:info@arteveldehs.be"},"info@arteveldehs.be")),c.a.createElement("li",null,c.a.createElement("a",{className:"footer-info-general",href:"tel:03292348600"},"09 234 86 00")))),c.a.createElement("div",{className:"footer-container-center"},c.a.createElement("h2",null,"Socials"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{className:"footer-info-general",target:"blanc",href:"https://www.instagram.com/undefinednmd/"},"Instagram ")),c.a.createElement("li",null,c.a.createElement("a",{className:"footer-info-general",target:"blanc",href:"https://www.facebook.com/undefinednmd/"}," Facebook ")),c.a.createElement("li",null,c.a.createElement("a",{className:"footer-info-general",target:"blanc",href:"https://www.linkedin.com/in/undefined-nmd-122144194/"}," LinkedIn ")),c.a.createElement("li",null,c.a.createElement("a",{className:"footer-info-general",target:"blanc",href:"https://www.twitter.com/UNDEFIN78240322"}," Twitter")))),c.a.createElement("div",{className:"blank"}),c.a.createElement("div",{className:"undefined-copyright"},"_defined"))))},o}(n.Component);var p=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).state={navActive:!1,projects:[],id:!1,projectTitle:"",projectBody:"",projectSynopsis:""},t.setStateId=function(e){var a=e.data.title,n=e.data.body,c=e.data.synopsis;console.log(c),t.setState({id:!0,projectTitle:a,projectBody:n,projectSynopsis:c})},t.getNavState=function(){t.setState((function(e){return{navActive:!e.navActive}})),console.log("State change ! ! ! ")},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){var e=this;i.a.get("https://undefined-baas.firebaseapp.com/api/projects").then((function(t){e.setState({projects:t.data.data})}))},o.render=function(){var e=this;return this.state.id?c.a.createElement(m,{projecttitle:this.state.projectTitle,projectbody:this.state.projectBody,projectsynopsis:this.state.projectSynopsis}):c.a.createElement(l.a,null,c.a.createElement(s.a,{title:"Home"}),c.a.createElement(r.a,{menustate:this.state.navActive,toggleNav:this.getNavState}),c.a.createElement("div",{className:"main-container-project-list"},c.a.createElement("div",{className:"toggle-nav reduce-width-float add-fixed",onClick:this.getNavState},c.a.createElement("div",{className:"nav-line-top"}),c.a.createElement("div",{className:"nav-line-bottom"})),this.state&&this.state.projects&&this.state.projects.map((function(t,a){return c.a.createElement("div",{className:"project-list-container",key:a},c.a.createElement("h2",{className:"project-list-title"},t.data.title),c.a.createElement("div",{className:"project-list-row"},c.a.createElement("img",{src:t.data.pictures.reference_md?t.data.pictures.reference_md:"https://firebasestorage.googleapis.com/v0/b/undefined-baas.appspot.com/o/resized%2Ftumblr_n7jz4u5Fgd1ql2g28o1_500_1280x1280.jpg?alt=media&token=16672718-2b3c-493f-a1f0-f6cab1d8eaaa",className:"project-list-image",alt:"project-img"}),c.a.createElement("p",{className:"action-button edit-height",onClick:function(){return e.setStateId(t)}},"View project")),c.a.createElement("p",{className:"project-list-slug"},t.data.synopsis?t.data.synopsis:""))}))))},n}(n.Component);t.default=p},250:function(e,t,a){e.exports=a.p+"static/tumblr_n7jz4u5Fgd1ql2g28o1_500-7f153ace738718b92c148144c97160ca.jpg"}}]);
//# sourceMappingURL=component---src-pages-projectspage-js-8eb6f657d82430d9a085.js.map