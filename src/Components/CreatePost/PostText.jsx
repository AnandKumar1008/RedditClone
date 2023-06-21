import React, { useContext, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrCircleInformation } from 'react-icons/gr';
import './PostText.css';
import Post from '../Post/Post';
// const post_type=[{name}]
import { MyContext } from '../../App';
const PostText = (props) => {
  const { update, setUpdate, setNewPost } = useContext(MyContext);
  const { post } = props;
  const [inp, setInp] = useState({
    title: '',
    textArea: '',
  });
  const handleChange = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };
  const handlePost = () => {
    setUpdate([
      <Post key={update.length} title={inp.title} textArea={inp.textArea} />,
      ...update,
    ]);
    setNewPost((p) => !p);
  };
  return (
    <div className="reddit_clone-post_type">
      <input
        type="text"
        placeholder="Title"
        name="title"
        maxLength={300}
        onChange={handleChange}
        value={inp.title}
      />
      {post == 'img_video' ? (
        <img />
      ) : (
        <textarea
          name="textArea"
          id=""
          cols="30"
          rows="10"
          placeholder={post == 'link' ? 'Url' : 'Text(Optional)'}
          onChange={handleChange}
          value={inp.textArea}
        ></textarea>
      )}
      <div className="reddit_clone-post_type_buttons">
        <button className="">
          <AiOutlinePlus />
          type
        </button>
        <button>
          <AiOutlinePlus /> Spoiler
        </button>
        <button>
          <AiOutlinePlus /> NFW
        </button>
      </div>
      <div className="reddit_clone-post_type_save">
        <button>SaveDraft</button>
        <button
          onClick={handlePost}
          style={
            inp.title.length == 0
              ? {
                  backgroundColor: 'var(--color-border)',
                  borderColor: 'var(--color-border)',
                  color: 'gray',
                }
              : {}
          }
          disabled={inp.title.length == 0}
        >
          Post
        </button>
      </div>
      <div className="reddit_clone-post_type_notification">
        <div className="reddit_clone-post_type_checkbox">
          <input type="checkbox" id="notification" />
          <label htmlFor="notification">Send me post reply notifications</label>
        </div>
        <p>
          Connect Accounts to share your post <GrCircleInformation />
        </p>
      </div>
    </div>
  );
};

export default PostText;
