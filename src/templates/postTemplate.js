import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Layout from "../components/Layout";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const alt = node.data.target.fields.title["en-US"];
      const url = node.data.target.fields.file["en-US"].url;
      return (
        <div className="post__media">
          <img src={url} alt={alt} />
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node) => {
      if (node.data.uri.indexOf("youtube") !== -1) {
        return (
          <div className="post__media">
            <iframe
              width="560"
              height="315"
              src={node.data.uri}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      }
    },
  },
};

export const pageQuery = graphql`
  query BlogPostByPath($title: String!) {
    contentfulBlogPost(title: { eq: $title }) {
      title
      date(formatString: "MMMM DD, YYYY")
      body {
        json
      }
    }
  }
`;

const postTemplate = ({ data, pageContext }) => {
  const { contentfulBlogPost: post } = data;
  const language = pageContext.lang;

  return (
    <Layout language={language}>
      <div className="post__content">
        <div className="post__info">
          <h1 className="post__title">{post.title}</h1>
          <h3 className="post__date">{post.date}</h3>
        </div>
        <div className="post__body">
          {documentToReactComponents(post.body.json, options)}
        </div>
      </div>
    </Layout>
  );
};

export default postTemplate;
