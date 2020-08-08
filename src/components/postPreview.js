import React from "react";
import { Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const PostPreview = ({ post }) => {
  return (
    <div className="postPreview__wrapper">
      <p className="postPreview__date">{post.node.date}</p>
      <h1 className="postPreview__title">
        <Link to={post.node.path}>{post.node.title}</Link>
      </h1>
      <div className="postPreview__preview">
        {documentToReactComponents(post.node.preview.json)}
      </div>
    </div>
  );
};

export default PostPreview;
