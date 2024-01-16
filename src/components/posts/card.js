import React from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import MessageIcon from '@mui/icons-material/Message';

const PostCard = (props) => {
  const { body, title, id } = props;
  return (
    <div className="post_card_container" id={id}>
      <h4 className="post_title">{title.slice(0, 40)}</h4>
      <p className="post_body">{body.slice(0, 100)}</p>
      <div className="icon_box float-end d-flex mt-2 mb-0">
        <ThumbUpIcon className="like" />
        <ThumbDownAltIcon className="dislike" />
        <MessageIcon className="msg"  />
      </div>
    </div>
  );
};

export default PostCard;
