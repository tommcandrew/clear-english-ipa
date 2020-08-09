import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import Head from "../components/head.js";
import PostPreview from "../components/postPreview";

const Blog = (props) => {
  const language = props.pageContext.lang;

  useEffect(() => {
    if (!window) {
      return;
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            preview {
              json
            }
            body {
              json
            }
          }
        }
      }
    }
  `);

  const blogPosts = data.allContentfulBlogPost.edges;

  return (
    <Layout language={language}>
      <Head title="blog" />
      <div className="blog__content" id="blog">
        <div>
          <h1 className="blog__title">Blog posts</h1>
          {blogPosts.map((post, index) => (
            <PostPreview post={post} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
