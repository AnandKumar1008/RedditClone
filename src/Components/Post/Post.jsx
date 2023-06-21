import React, { useState } from "react";
import "./Post.css";
import { FaThumbsDown,FaThumbsUp} from "react-icons/fa";
import { FaArrowDown,FaArrowUp} from "react-icons/fa";
// import { FaDown } from "react-icons/fa";
import {BiDownvote,BiUpvote} from 'react-icons/bi'
const Post = (props) => {
  const [vote, setVote] = useState(Math.floor(Math.random()*100));
  const handleClick = (e) => {
    // console.log(e.target.name);
    if (e === "upvote") {
      setVote(p=>p+1);
    } else {
      setVote(p=>p-1);
    }
  };
  return (
    <div className="reddit_clone-post">
      <div className="reddit_clone-post_button">
        <div className="reddit_clone-post_button_upvote">
         
          <BiUpvote className="reddit_clone-arrow_up" onClick={()=>handleClick("upvote")}  name="upvote"/>
         
          <p>{vote}</p>
          <BiDownvote className="reddit_clone-arrow_down" onClick={()=>handleClick("downvote")} name="downvote"/>
        </div>
       
      </div>
      <div className="reddit_clone-post_data">
        <h3>{props.title}</h3>
        <hr />
        <p>{props.textArea}</p>
      </div>
    </div>
  );
};

export default Post;
