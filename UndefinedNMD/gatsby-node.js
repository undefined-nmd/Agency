exports.createPages = ({ actions }) => {
    actions.createRedirect({
        fromPath: `/roster`,
        toPath: `/`,
        isPermanent: `true`,
    })
}