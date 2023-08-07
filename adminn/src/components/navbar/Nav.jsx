import React from 'react'
import './nav.scss'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
export const Nav = () => {
  return (
    <div className='navbar'>
    <div className='wrapper'>
      <div className='search'>
        <input type='text' className='input'placeholder='search....'/>
        <SavedSearchIcon/>
        
      </div>
      <div className='items'>
        <div className='item'>
  <LanguageOutlinedIcon/>
  English
        </div>
        <div className='item'>
 <DarkModeOutlinedIcon/>

 
        </div>
        <div className='item'>
 <FullscreenExitOutlinedIcon/>

 
        </div>
        <div className='item'>
 <NotificationsNoneOutlinedIcon/>

  
        </div>
        <div className='item'>
 <ChatBubbleOutlineOutlinedIcon/>

 
        </div>
        <div className='item'>
 <ListOutlinedIcon/>

  
        </div>
        <div className='item'>
<img alt='' src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className='avatar'></img>

  
        </div>
      </div>
    </div>
    </div>
  )
}
