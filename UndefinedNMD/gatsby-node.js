exports.createPages = ({ actions }) => {
    actions.createRedirect({
        fromPath: `/roster`,
        toPath: `/index`,
        isPermanent: `true`,
    })
}