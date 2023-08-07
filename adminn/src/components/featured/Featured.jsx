import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar" 
import "react-circular-progressbar/dist/styles.css"

export const Featured = () => {
  return (
    <div className='featured'>
        <div className='top'>
            <h1 className='title'>Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className='bottom'>
            <div className='featuredChart'>
<CircularProgressbar value={70} text={"70%"} strokeWidth={3}/>
            </div>
            <p className='title'>Total sales Made</p>
            <p className='amount'> &#8377;7000</p>
            <p className='desc'>it is what it is kothu paisa anibi je The following revenue chart provides a comprehensive overview of the financial performance related to room bookings.</p>
        </div>
    </div>
  )
}
