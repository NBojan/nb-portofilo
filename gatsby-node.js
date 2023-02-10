const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query MyQuery {
            allContentfulProjects {
            nodes {
                slug
            }
            }
        }
    `)

    result.data.allContentfulProjects.nodes.forEach(item => {
        createPage({
            path: `/projects/${item.slug}`,
            component: path.resolve("src/templates/ProjectTemplate.js"),
            context: {
                slug: item.slug
            }
        })
    })
}