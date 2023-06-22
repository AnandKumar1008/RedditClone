import React, { useContext, useState } from 'react';
import './Post.css';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
// import { FaDown } from "react-icons/fa";
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import {ImArrowUp,ImArrowDown} from 'react-icons/im'
import { BiSolidDownvote, BiSolidUpvote } from 'react-icons/bi';
import {MyContext} from '../../App'
import {GoComment} from 'react-icons/go'
import {FaShare} from 'react-icons/fa'
import {BsSave} from 'react-icons/bs'
const Post = (props) => {
  const [vote, setVote] = useState(Math.floor(Math.random() * 100));
  const {login} =useContext(MyContext);
  const [oneVote, setOneVote] = useState({
    up: true,
    down: true,
  });
  const [val, setVal] = useState(vote);
  const handleUp = (e) => {
    // console.log(e.target.name);
    if(!login) return;
    if (oneVote.up) {
      setVote(val + 1);
      setOneVote({ up: false, down: true });
    } else {
      setVote(val);
      setOneVote({ up: true, down: true });
    }
  };
  const handleDown = () => {
    if(!login) return;
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
          <ImArrowUp
            className="reddit_clone-arrow_up"
            onClick={() => handleUp('upvote')}
            name="upvote"
         style={vote==val+1?{color:"black"}:{}} />

          <p>{vote}</p>
          <ImArrowDown
            className="reddit_clone-arrow_down"
            onClick={() => handleDown('downvote')}
            name="downvote"
            style={vote==val-1?{color:"black"}:{}}
          />
          {/* <ImArrowUp/> */}
        </div>
      </div>
      <div className="reddit_clone-post_data">
        <h3>{props.title}</h3>
        <hr />
        <p>{props.textArea}</p>
        <div className="reddit_clone-post_comments">
          <p><GoComment/>{Math.ceil(Math.random()*100)/10}k  Comments</p>
          <p><FaShare/> share</p>
          <p><BsSave/>save</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
