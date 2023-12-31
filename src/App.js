import React, { createContext, useEffect, useState } from "react";
import Home from "./Page/Home/Home.jsx";
import { Routes, Route, json } from "react-router-dom";
import Comment from "./Components/Comment/Comment.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Menu from "./Components/Menu/Menu.jsx";
export const MyContext = createContext();
import Signup from "./Components/Signup/Signup";
// import CreatePost from "./Components/CreatePost/CreatePost";

import { initialPosts } from "./Components/initialPosts.jsx";
import Post from "./Components/Post/Post.jsx";
import { MakeComment } from "./Components/Comment/Comment.jsx";
import "./style.css";
import Premium from "./Components/Premium/Premium.jsx";
import PremiumPage from "./Page/PremiumPage/PremiumPage.jsx";
import Popular from "./Page/Popular/Popular.jsx";
import Messages from "./Page/Messages/Messages.jsx";
import NotificationPage from "./Page/NotificationPage/NotificationPage.jsx";
import Coinspage from "./Page/CoinsPage/Coinspage.jsx";
import Login from "./Components/Login/Login.jsx";
import Comingpage from "./Page/Comingpage/Comingpage.jsx";
import CommentPage from "./Page/CommentPage/CommentPage.jsx";
const allComment = JSON.parse(localStorage.getItem("reddit_comment")) || {};
import { arr } from "./Components/NavMenuArray.jsx";
import CreatePassword from "./Components/Signup/CreatePassword.jsx";
// const localComment = JSON.parse(localStorage.getItem("reddit_comment")) || {};
if (!localStorage.getItem("reddit_post")) {
  localStorage.setItem("reddit_post", JSON.stringify(initialPosts));
}
const App = () => {
  const [update, setUpdate] = useState([]);
  const [login, setLogin] = useState(false);
  // const [theme, setTheme] = useState(darkTheme);
  const [overlay, setOverlay] = useState("");
  const [newPost, setNewPost] = useState(false);
  const [showForm, setShowForm] = useState("none");
  const [userName, setUserName] = useState("");
  const [postItem, setPostItem] = useState({});
  const [id, setId] = useState(0);
  const [userPhoto, setUserPhoto] = useState();
  const [loading, setLoading] = useState("");
  const [theme, setTheme] = useState("light-theme");
  const [isAllPage, setIsAllPage] = useState(false);
  const [isPopularPage, setIsPopularPage] = useState(false);
  const [menu, setMenu] = useState(true);
  const [navMenu, setNavMenu] = useState(arr[0]);
  const over_lay = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    pointerEvents: "none",
  };
  useEffect(() => {
    console.log(theme);
    document.body.className = theme;
    document.body.style.backgroundColor = "var(--color-background)";
    const current_user = localStorage.getItem("current_user");
    if (current_user) setUserName(JSON.parse(current));
  }, [theme]);

  return (
    <div className="reddit_clone-app">
      <MyContext.Provider
        value={{
          id,
          setId,
          update,
          setUpdate,
          login,
          setLogin,
          showForm,
          setShowForm,
          theme,
          setTheme,
          newPost,
          setNewPost,
          userName,
          setUserName,
          postItem,
          setPostItem,
          allComment,
          userPhoto,
          setUserPhoto,
          loading,
          setLoading,
          theme,
          setTheme,
          isAllPage,
          setIsAllPage,
          isPopularPage,
          setIsPopularPage,
          over_lay,
          menu,
          setMenu,
          navMenu,
          setNavMenu,
        }}
      >
        <div className="reddit_clone-app_fixed"></div>
        {/* <Menu /> */}

        <Routes>
          <Route path="/Comment" element={<CommentPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/coins" element={<Coinspage />} />
          <Route path="/comingpage" element={<Comingpage />} />
        </Routes>

        <div style={showForm == "none" ? {} : over_lay}>
          {showForm == "Login" ? (
            <Login />
          ) : showForm == "Signup" ? (
            <Signup />
          ) : showForm == "create_password" ? (
            <CreatePassword />
          ) : (
            false
          )}
        </div>
      </MyContext.Provider>
    </div>
  );
};

export default App;
