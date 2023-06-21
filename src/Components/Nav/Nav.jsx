import React, { useContext, useState } from 'react';
import { FaReddit } from 'react-icons/fa';
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { IoIosContact } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { BsQrCodeScan } from 'react-icons/bs';
import { TbCircleArrowUpRightFilled } from 'react-icons/tb';
import { CiCoinInsert } from 'react-icons/ci';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import './Nav.css';
import Login from '../Login/Login';
import { MyContext } from '../../App';
import Signup from '../Signup/Signup';
import CreatePassword from '../Signup/CreatePassword';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { FcAdvertising } from 'react-icons/fc';
import { GiAlienSkull } from 'react-icons/gi';
import { BsChevronDown } from 'react-icons/bs';
import { CgLogIn } from 'react-icons/cg';
// import {FaRegRectangleList} from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi';
import { CiCircleMore } from 'react-icons/ci';
import { BsQuestionLg } from 'react-icons/bs';

const Option = () => {
  const { login, setLogin, setShowForm } = useContext(MyContext);
  const handleLogin = () => {
    if (!login) {
      setShowForm('Login');
      return;
    }
    setLogin((p) => false);
    const arr=[];
    localStorage.setItem('reddit_clone',JSON.stringify(arr));
  };
  return (
    <div className="reddit_clone-nav_option">
      <button>
        <BsQuestionLg /> Help Center
      </button>
      <button>
        <CiCircleMore /> More
      </button>
      <button>
        <FiFileText /> Terms And Policies
      </button>
      <button>
        <FcAdvertising /> Advertise on Reddit
      </button>
      <button onClick={handleLogin}>
        <CgLogIn /> LogIn & LogOut
      </button>
    </div>
  );
};
const NavIcon = ({ userName, option, setOption }) => {
  // console.log(userName);
  // const {userName}=props;
  const handleOptions = () => {
    setOption((p) => !p);
  };
  return (
    <div className="reddit_clone-nav_icons">
      <a>
        <TbCircleArrowUpRightFilled className="react_clone-menu_icons" />{' '}
      </a>
      <a>
        <CiCoinInsert className="react_clone-menu_icons" />{' '}
      </a>
      <a href="">
        <BsFillChatDotsFill />
      </a>
      <a>
        <AiOutlinePlus className="react_clone-menu_icons" />{' '}
      </a>
      <a>
        <IoIosNotificationsOutline className="react_clone-menu_icons" />
      </a>

      <a href="">
        <FcAdvertising />
      </a>
      <div className="reddit_clone-nav_username" onClick={handleOptions}>
        <GiAlienSkull />
        <p>
          <a href="">{userName}</a>
        </p>
        <BsChevronDown />
        {option && <Option />}
      </div>
    </div>
  );
};

const Nav = () => {
  const [option, setOption] = useState(false);

  const [hover, setHover] = useState(false);
  const { login, setLogin, showForm, setShowForm, theme, setTheme, userName } =
    useContext(MyContext);
  const handleHover = () => {
    setHover(!hover);
  };
  const handleClick = () => {
    // setLogin(true);
    setShowForm('Login');
    // setOverlay("background-overlay");
  };
  return (
    <div className="reddit_clone-nav_fixed">
      <div className="reddit_clone-nav ">
        <div className="reddit_clone-nav_icon">
          <FaReddit className="reddit_clone-nav_reddit_icon" />
          <p>reddit</p>
        </div>
        <input type="text" placeholder="🔍 Search Reddit" />
        {login ? (
          <NavIcon userName={userName} option={option} setOption={setOption} />
        ) : (
          <>
            <button className="reddit_clone-nav_getapp">
              {' '}
              <BsQrCodeScan /> Get App
            </button>
            <button className="reddit_clone-nav_login" onClick={handleClick}>
              Login
            </button>
            <div
              className="reddit_Clone-nav_before_login"
              onClick={() => setOption((p) => !p)}
            >
              <RiContactsLine className="reddit_clone-contact_icon" />
              <BsChevronDown />
              {option && <Option />}
            </div>
          </>
        )}
        {/* { login?<div className="reddit_clone-nav_username">
        <p>
        {userName}
          </p> </div>: <div className="reddit_clone-nav_options">
         
          
        </div>} */}
      </div>
    </div>
  );
};

export default Nav;
