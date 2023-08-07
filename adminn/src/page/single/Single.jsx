import React from 'react'
import './single.scss'
import { Nav } from '../../components/navbar/Nav'
import { Sidebar } from '../../components/sidebar/Sidebar'
export const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className='singleContainer'>
        <Nav />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">sone Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">sonedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue"> 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    bhubaneswar
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            
          </div>
        </div>
      </div>
    </div>
  )
}
