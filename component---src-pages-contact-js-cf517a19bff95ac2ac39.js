(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{243:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),c=a.n(n),o=a(237),l=a(239),r=(a(254),a(252),a(238)),s=a(240),i=a.n(s);var m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).getFormState=function(){a.setState((function(e){return{formActive:!e.formActive}})),console.log(a.state.formActive)},a.getNavState=function(){a.setState((function(e){return{navActive:!e.navActive}})),console.log(a.state.navActive)},a.handleChange=function(e,t){var n;a.setState({formData:Object.assign({},a.state.formData,(n={},n[t]=e.target.value,n))}),console.log(a.state.formData)},a.submitForm=function(){i.a.post("https://undefined-baas.firebaseapp.com/api/contact",a.state.formData).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.state={formData:{name:"",email:"",message:""},formActive:!1,navActive:!1},a.handleChange=a.handleChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t="show-form-div",a="hide-form-div",n=this.state.formActive;return c.a.createElement(o.a,null,c.a.createElement(r.a,{title:"Contact"}),c.a.createElement(l.a,{menustate:this.state.navActive,toggleNav:this.getNavState}),c.a.createElement("div",{className:"contact-container"},c.a.createElement("div",{className:"toggle-nav reduce-width-float",onClick:this.getNavState},c.a.createElement("div",{className:"nav-line-top"}),c.a.createElement("div",{className:"nav-line-bottom"})),c.a.createElement("div",{className:"contactinfo"},c.a.createElement("div",{className:"contactinfo-contact"},c.a.createElement("h2",{className:"contact-h2"},"Contact"),c.a.createElement("p",{className:"contact-p"},"info@arteveldehs.be / 09 234 86 00")),c.a.createElement("div",{className:"contactinfo-social"},c.a.createElement("h2",{className:"contact-h2"},"Social"),c.a.createElement("p",{className:"contact-p"},"Instagram / Facebook / LinkedIn / Twitter")),c.a.createElement("div",{className:"contactinfo-general"},c.a.createElement("p",null,"Hoogpoort 15"),c.a.createElement("p",null,"9000 Gent"),c.a.createElement("p",null,"ONnr: 0474.120.360"),c.a.createElement("p",null,"BTWnr: BTW BE 0474.120.360"))),c.a.createElement("div",{className:"rightside-title"}),c.a.createElement("div",{className:"rightside-button"},c.a.createElement("a",{href:"#",className:"action-button add-btn-padding",onClick:this.getFormState},"Your question?"))),c.a.createElement("div",{className:"rightside-logo"}),c.a.createElement("a",{href:"/#",className:"undefined-copyright-contact"},"_defined"),c.a.createElement("div",{className:n?t:a},c.a.createElement("form",null,c.a.createElement("h3",{className:"project-subtitle"},"Ask us a anything"),c.a.createElement("div",{className:"close-form",onClick:this.getFormState},c.a.createElement("div",{className:"close-nav-top"}),c.a.createElement("div",{className:"close-nav-bottom"})),c.a.createElement("input",{type:"text",placeholder:"Name",onChange:function(t){return e.handleChange(t,"name")},className:"question-form-input con-form-name-val"}),c.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(t){return e.handleChange(t,"email")},className:"question-form-input"}),c.a.createElement("textarea",{type:"text",rows:"4",cols:"50",placeholder:"Your message",onChange:function(t){return e.handleChange(t,"message")},className:"question-form-input question-form-textarea"}),c.a.createElement("p",{className:"action-button center-action-btn",onClick:this.submitForm},"Send"))))},n}(n.Component);t.default=m}}]);
//# sourceMappingURL=component---src-pages-contact-js-cf517a19bff95ac2ac39.js.map