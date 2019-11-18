// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("../src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-projectspage-js": () => import("../src/pages/projectspage.js" /* webpackChunkName: "component---src-pages-projectspage-js" */),
  "component---src-pages-roster-js": () => import("../src/pages/roster.js" /* webpackChunkName: "component---src-pages-roster-js" */),
  "component---src-pages-schedule-js": () => import("../src/pages/schedule.js" /* webpackChunkName: "component---src-pages-schedule-js" */),
  "component---src-pages-services-js": () => import("../src/pages/services.js" /* webpackChunkName: "component---src-pages-services-js" */),
  "component---src-pages-team-page-js": () => import("../src/pages/teamPage.js" /* webpackChunkName: "component---src-pages-team-page-js" */)
}

