import React from 'react'
import './Menu.css'
import {AiFillHome} from 'react-icons/ai'
import {TbCircleArrowUpRightFilled} from 'react-icons/tb'
import {BsFileBarGraph} from 'react-icons/bs'
import {GrUserSettings} from 'react-icons/gr'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io';
import {CiCoinInsert} from 'react-icons/ci'
import {GrShield} from 'react-icons/gr'
import { IoShirtOutline } from 'react-icons/io5';
import {MyContext} from '../../App.js'

const darkModeStyle={
  backgroundColor:"var(--color-lightDark)",
  color:"white",
}
const Menu = () => {
  
  return (
    <div className='reddit_clone-menu' >
        <p>FEEDS</p>
        <button> <AiFillHome className='react_clone-menu_icons'/> Home</button>
        <button><TbCircleArrowUpRightFilled className='react_clone-menu_icons'/> Popular</button>
        <button><BsFileBarGraph className='react_clone-menu_icons'/> All</button>
        <p>OTHER</p>
        <button><GrUserSettings className='react_clone-menu_icons'/> User Setting</button>
        <button><AiOutlineMessage className='react_clone-menu_icons'/> Message</button>
        <button><AiOutlinePlus className='react_clone-menu_icons'/> Create Post</button>
        <button><IoIosNotificationsOutline className='react_clone-menu_icons'/> Notifications</button>
        <button><CiCoinInsert className='react_clone-menu_icons'/> Coins</button>
        <button><GrShield className='react_clone-menu_icons'/> Premium</button>
        <button><IoShirtOutline className='react_clone-menu_icons'/> Avatar</button>
      
    </div>
  )
}

export default Menu;
