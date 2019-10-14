module.exports = {
  pathPrefix: "/UndefinedNMD",
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-firebase`,
      options: {
        // point to the firebase private key downloaded
        // credential: require("./firebase-key.json"),

        // your firebase database root url
        databaseURL: "https://reactjs-training.firebaseio.com",

        // you can have multiple "types" that point to different paths
        types: [
          {
            // this type will become `allWorkshop` in graphql
            type: "Workshop",

            // the path to get the records from
            path: "v2/data/workshops",

            // probably don't want your entire database, use the query option
            // to limit however you'd like
            query: ref => ref.limitToLast(10),

            // This allows you to map your data to data that GraphQL likes:
            // 1. Turn your lists into actual arrays
            // 2. Fix keys that GraphQL hates. It doesn't allow number keys
            //    like "0", you'll get this error pretty often:
            //    Error: Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "0" does not
            // 3. Remove stuff you don't need.
            //
            // Feel free to mutate, we sent you a copy anyway.
            map: node => {
              // fix keys graphql hates
              node.nineteenEightyFive = node['1985']
              delete node['1985']

              // convert a child list to an array:
              return node.sessions = Object.keys(node.sessions).map(key => {
                return { _key: key, session: node.sessions[key] }
              })

              // finally, return the node
              return node
            },
          },

          // if you're data is really simple, this should be fine too
          {
            type: "CourseDescriptions",
            path: "text/courseDescriptions",
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
