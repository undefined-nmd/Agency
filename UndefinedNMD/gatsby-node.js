exports.createPages = ({ graphql, actions }) => {
    const {createRedirect} = actions //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
    createRedirect({ fromPath: '/roster', toPath: '/', isPermanent: true });
}