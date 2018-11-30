const _ = require('lodash')
const path = require('path')
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: { allGhostPost, allGhostPage },
  } = await graphql(
    `
      {
        allGhostPost {
          edges {
            node {
              id
              slug
              page
              tags {
                id
                slug
                name
              }
              authors {
                id
                slug
                name
              }
            }
          }
        }
        allGhostPage {
          edges {
            node {
              id
              slug
              page
              authors {
                id
                slug
                name
              }
            }
          }
        }
      }
    `
  )

  if (allGhostPage.errors || allGhostPost.errors) {
    console.log(allGhostPage.errors || allGhostPost.errors)
    throw new Error(allGhostPage.errors || allGhostPost.errors)
  }

  const createGhostPage = ({ id, slug, name, route, templatePath }) => {
    createPage({
      path: route,
      component: slash(path.resolve(templatePath)),
      context: {
        id,
        slug,
        name,
      },
    })
  }

  const allEdges = allGhostPost.edges.concat(allGhostPage.edges)

  _.each(allEdges, ({ node: { id, slug, name, tags, authors, page } }) => {
    if (page) {
      /* ==== PAGE ==== */
      createGhostPage({
        id,
        slug,
        name,
        route: `/${slug}/`,
        templatePath: `./src/templates/page.js`,
      })
      /* ==== END PAGE ====*/
    } else {
      /* ==== POST ==== */
      createGhostPage({
        id,
        slug,
        name,
        route: `/${slug}/`,
        templatePath: `./src/templates/post.js`,
      })
      /* ==== END POST ====*/
    }
    _.each(tags, ({ id, slug, name }) => {
      /* ==== TAG ==== */
      createGhostPage({
        id,
        slug,
        name,
        route: `/tag/${slug}/`,
        templatePath: `./src/templates/tag.js`,
      })
      /* ==== END TAG ====*/
    })
    _.each(authors, ({ id, slug, name }) => {
      /* ==== AUTHOR ==== */
      createGhostPage({
        id,
        slug,
        name,
        route: `/author/${slug}/`,
        templatePath: `./src/templates/author.js`,
      })
      /* ==== END AUTHOR ==== */
    })
  })
}
