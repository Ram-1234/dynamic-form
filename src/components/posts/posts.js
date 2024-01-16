import React from "react";
import "./style.css";
import FetchData from "../hook/hook";
import PostCard from "./card";
import Loader from "../loader/loader";
import { POSTS_API } from "../../api/services";

const Posts = () => {
  const post = FetchData(POSTS_API);

  return (
    <div className="post_container">
      {!post.length > 0 && <Loader />}
      {post &&
        post.map((item, index) => {
          return <PostCard key={item.id} {...item} />;
        })}
    </div>
  );
};

export default Posts;
