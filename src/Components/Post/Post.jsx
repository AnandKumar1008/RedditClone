import React, { useState } from 'react';
import './Post.css';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
// import { FaDown } from "react-icons/fa";
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { BiSolidDownvote, BiSolidUpvote } from 'react-icons/bi';
const Post = (props) => {
  const [vote, setVote] = useState(Math.floor(Math.random() * 100));
  const [oneVote, setOneVote] = useState({
    up: true,
    down: true,
  });
  const [val, setVal] = useState(vote);
  // const val=vote;
  const handleUp = (e) => {
    // console.log(e.target.name);
    if (oneVote.up) {
      setVote(val + 1);
      setOneVote({ up: false, down: true });
    } else {
      setVote(val);
      setOneVote({ up: true, down: true });
    }
  };
  const handleDown = () => {
    if (oneVote.down) {
      setVote(val - 1);
      setOneVote({ up: true, down: false });
    } else {
      setVote(val);
      setOneVote({ up: true, down: true });
    }
  };
  return (
    <div className="reddit_clone-post">
      <div className="reddit_clone-post_button">
        <div className="reddit_clone-post_button_upvote">
          <BiUpvote
            className="reddit_clone-arrow_up"
            onClick={() => handleUp('upvote')}
            name="upvote"
          />

          <p>{vote}</p>
          <BiDownvote
            className="reddit_clone-arrow_down"
            onClick={() => handleDown('downvote')}
            name="downvote"
          />
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
