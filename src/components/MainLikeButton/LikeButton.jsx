import React from "react";
import heartLiked from "../../images/heart-fill.png";
import heartNotLiked from "../../images/heart-empty.png";
import { useState } from "react";
import "../MainLikeButton/LikeButton.css";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="like__box">
      <button
        onClick={handleClick}
        style={{ background: "none", border: "none" }}
      >
        {liked ? (
          <img src={heartLiked} alt="Liked" />
        ) : (
          <img src={heartNotLiked} alt="Not Liked" />
        )}
      </button>
      <span className="like__count">{likeCount}</span>
    </div>
  );
}

export default LikeButton;
