import React from 'react'
import './sidebar.scss'
import {Link} from 'react-router-dom'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PersonIcon from '@mui/icons-material/Person';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'> <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Bookit Admin.</span>
        </Link></span>
        </div>
        <hr></hr>
        <div className='center'>
        <ul><p className='title'>MAIN</p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardCustomizeIcon className='icon' />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className='title'>LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartIcon  className='icon' />
            <span>Rooms</span>
          </li></Link>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className='icon' />
            <span>Notification</span>
          </li>
          <p className='title'>SERVICE</p>
          <li><PersonOutlineIcon className='icon' />
            <span>Logs</span>
          </li>
          <li> <SettingsApplicationsIcon className='icon'  />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
        </div>
        <div className='bottom'>
        
<div className='color'></div>
<div className='color'></div>
<div className='color'></div>
        </div>
    </div>
  )
}
