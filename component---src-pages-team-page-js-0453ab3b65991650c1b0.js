(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{248:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(261),o=a.n(i),r=a(239),l=a(237),p=(a(262),a(238)),c=a(240),m=a.n(c);function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,a;function s(t){var a;return(a=e.call(this,t)||this).getNavState=function(){a.setState((function(e){return{navActive:!e.navActive}})),console.log("State change ! ! ! ")},a.state={people:[],trigger:!0,navActive:!1,showNav:"show-nav",hideNav:"hide-nav"},a.peIndex=0,a.nextPerson=a.nextPerson.bind(I(a)),a.prevPerson=a.prevPerson.bind(I(a)),a}a=e,(t=s).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=s.prototype;return i.nextPerson=function(){console.log(this.peIndex),this.peIndex<this.state.people.length-1&&(this.peIndex++,this.setState({trigger:!0}),console.log(this.state.people[this.peIndex]),console.log(this.peIndex))},i.prevPerson=function(){console.log(this.peIndex),this.peIndex>0&&(this.peIndex--,this.setState({trigger:!0}),console.log(this.state.people[this.peIndex]),console.log(this.peIndex))},i.componentDidMount=function(){var e=this;m.a.get("https://undefined-baas.firebaseapp.com/api/team").then((function(t){e.setState({people:t.data.data}),console.log(t.data.data)}))},i.render=function(){return n.a.createElement(l.a,null,n.a.createElement(p.a,{title:"Assignments"}),n.a.createElement("div",{className:"col team-col"},n.a.createElement("div",{className:"margin-fix"},n.a.createElement(r.a,{menustate:this.state.navActive,toggleNav:this.getNavState})),n.a.createElement("div",{className:"row top-row"},n.a.createElement("div",{className:"toggle-nav reduce-width",onClick:this.getNavState},n.a.createElement("div",{className:"nav-line-top"}),n.a.createElement("div",{className:"nav-line-bottom"}))),n.a.createElement("div",{className:"row center-row"},n.a.createElement("img",{src:this.state.people[this.peIndex]?this.state.people[this.peIndex].data.picture.reference_md:"http://stasseynsjonas.be/api/profiles/placeholder.jpg",className:"person-image persone-image-top swap-on-hover__front-image",alt:"profile"}),n.a.createElement("img",{src:this.state.people[this.peIndex]?this.state.people[this.peIndex].data.picture_hoover.reference_md:"http://stasseynsjonas.be/api/profiles/placeholder.jpg",className:"person-image persone-image-top swap-on-hover__back-image",alt:"profile"}),n.a.createElement("p",{className:"person-action-btn",onClick:this.prevPerson},n.a.createElement("img",{src:o.a,alt:"arrow"})),n.a.createElement("div",{className:"person-data-div"},n.a.createElement("h1",{className:"person-name"},this.state.people[this.peIndex]?this.state.people[this.peIndex].data.firstName+" "+this.state.people[this.peIndex].data.lastName:"Rendering..."),n.a.createElement("div",{className:"person-bar"}),n.a.createElement("h3",{className:"person-title"},this.state.people[this.peIndex]?this.state.people[this.peIndex].data.jobTitle.title:"Rendering..."))),n.a.createElement("div",{className:"row bottom-row"},n.a.createElement("img",{src:this.state.people[this.peIndex+1]?this.state.people[this.peIndex+1].data.picture.reference_md:"http://stasseynsjonas.be/api/profiles/placeholder.jpg",className:"person-image",alt:"next-profile"}),n.a.createElement("p",{className:"person-action-btn",onClick:this.nextPerson},n.a.createElement("img",{src:o.a,alt:"arrow",className:"flip-arrow"})),n.a.createElement("div",{className:"person-data-div"}))))},s}(s.Component);t.default=d},261:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi4xMjEiIGhlaWdodD0iNTcuODExIiB2aWV3Qm94PSIwIDAgMjYuMTIxIDU3LjgxMSI+CiAgPGcgaWQ9Ikdyb3VwXzI3IiBkYXRhLW5hbWU9Ikdyb3VwIDI3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA5Ny45MzkgLTQwNS45MzkpIj4KICAgIDxsaW5lIGlkPSJMaW5lXzExIiBkYXRhLW5hbWU9IkxpbmUgMTEiIHgyPSI1NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTExMSA0NjMpIHJvdGF0ZSgtOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiMyYzNjZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzEyIiBkYXRhLW5hbWU9IkxpbmUgMTIiIHgyPSIxMiIgeTI9IjEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDk5IDQxOSkgcm90YXRlKC05MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJjM2NmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPGxpbmUgaWQ9IkxpbmVfMTMiIGRhdGEtbmFtZT0iTGluZSAxMyIgeDI9IjEyIiB5Mj0iMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMTEgNDA3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMmMzY2ZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPC9nPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-team-page-js-0453ab3b65991650c1b0.js.map