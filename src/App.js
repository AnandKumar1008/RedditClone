import React, { createContext, useEffect, useState } from 'react';
import AddPost from './Components/AddPost/AddPost';
import Nav from './Components/Nav/Nav';
import Allposts from './Components/AllPosts/AllPosts';
import './App.css';
export const MyContext = createContext();
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import CreatePost from './Components/CreatePost/CreatePost';
import Menu from './Components/Menu/Menu';
import RightSection from './Components/RightSection/RightSection';
import CreatePassword from './Components/Signup/CreatePassword';
import Post from './Components/Post/Post';
const darkTheme = {
  backgroundColor: '#2C3333',
  color: 'white',
};
const over_lay = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  pointerEvents: 'none',
};
const App = () => {
  const [update, setUpdate] = useState([]);
  const [login, setLogin] = useState(false);
  const [theme, setTheme] = useState(darkTheme);
  const [overlay, setOverlay] = useState('');
  const [newPost, setNewPost] = useState(false);
  const [showForm, setShowForm] = useState('none');
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const reddit = JSON.parse(localStorage.getItem('reddit_clone'));
    if (reddit) {
      setLogin(true);
      setUserName(reddit[0]);
    }
    const comments=async()=>{
      const res=await fetch('https://jsonplaceholder.typicode.com/comments');
      const data=await res.json();
      console.log(data);
      
     
      const arr=[];
      for(let i=0;i<20;i++){
        arr[i]=<Post title={data[i].name} textArea={data[i].body}/>
      }
      setUpdate(arr);
    }
    comments();
  }, []);
  return (
    <div
      className="reddit_clone-app"
      style={showForm == 'none' ? {} : over_lay}
    >
      <MyContext.Provider
        value={{
          update,
          setUpdate,
          login,
          setLogin,
          showForm,
          setShowForm,
          theme,
          setTheme,
          setNewPost,
          userName,
          setUserName,
        }}
      >
        <div style={showForm == 'none' ? {} : over_lay}>
          {showForm == 'Login' ? (
            <Login />
          ) : showForm == 'Signup' ? (
            <Signup />
          ) : showForm == 'create_password' ? (
            <CreatePassword />
          ) : (
            false
          )}
        </div>

        <Nav />
        <div className="reddit_clone-app_fixed">
          <Menu />
        </div>

        <div className="reddit_clone-app_total_posts">
          <div className="reddit_clone-app_pseudo">RAm</div>
          <div className="reddit_clone-app_total_post_comp">
            {newPost ? (
              <div className="reddit_clone-app_create_post">
                <CreatePost setNewPost={setNewPost} />
              </div>
            ) : (
              <div className="reddit_clone-app_add_post">
                {login ? <AddPost setNewPost={setNewPost} /> : ''}
                <Allposts />
              </div>
            )}
          </div>

          <div className="reddit_clone-app_right_section">
            <RightSection />
          </div>
        </div>

        {/* <CreatePost/> */}
      </MyContext.Provider>
    </div>
  );
};

export default App;
