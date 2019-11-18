const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jonasstasseyns/Documents/GitHub/WOT/Agency/UndefinedNMD/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/jonasstasseyns/Documents/GitHub/WOT/Agency/UndefinedNMD/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/jonasstasseyns/Documents/GitHub/WOT/Agency/UndefinedNMD/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jonasstasseyns/Documents/GitHub/WOT/Agency/UndefinedNMD/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/jonasstasseyns/Documents/GitHub/WOT/Agency/UndefinedNMD/src/pages/page-2.js"))),
  "component---src-pages-projectspage-js": hot(preferDefault(require("/Users/jonasstasseyns/Documents/GitHub/WOT/Agency/UndefinedNMD/src/pages/projectspage.js"))),
  "component---src-pages-roster-js": hot(preferDefault(require("/Users/jonasstasseyns/Documents/GitHub/WOT/Agency/UndefinedNMD/src/pages/roster.js"))),
  "component---src-pages-schedule-js": hot(preferDefault(require("/Users/jonasstasseyns/Documents/GitHub/WOT/Agency/UndefinedNMD/src/pages/schedule.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/Users/jonasstasseyns/Documents/GitHub/WOT/Agency/UndefinedNMD/src/pages/services.js"))),
  "component---src-pages-team-page-js": hot(preferDefault(require("/Users/jonasstasseyns/Documents/GitHub/WOT/Agency/UndefinedNMD/src/pages/teamPage.js")))
}

