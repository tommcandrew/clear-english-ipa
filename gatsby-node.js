const path = require("path");

const supportedLanguages = [
  { lang: "en", default: true },
  { lang: "sc", default: false },
  { lang: "tc", default: false },
  { lang: "ja", default: false },
];
exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage },
}) => {
  await deletePage(page);

  supportedLanguages.map((langObj) => {
    const localizedPath = langObj.default
      ? page.path
      : `/${langObj.lang}${page.path}`;

    return createPage({
      ...page,
      path: localizedPath,

      context: {
        ...page.context,
        lang: langObj.lang,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/postTemplate.js`);
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              path
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allContentfulBlogPost.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    supportedLanguages.map((langObj) => {
      const localizedPath = langObj.default
        ? `/blog/${post.node.path}`
        : `/${langObj.lang}/blog/${post.node.path}`;
      createPage({
        path: localizedPath,
        component: blogPost,
        context: {
          title: post.node.title,
          previous,
          next,
          lang: langObj.lang,
        },
      });
    });
  });
};
