import React from 'react'
import './single.scss'
import { DataGrid } from "@mui/x-data-grid";
import { Nav } from '../../components/navbar/Nav'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { useLocation } from 'react-router-dom';
export const Single = () => {
  const location = useLocation();
  //console.log(location)
  // Access the passed data from the state
  const list  = location.state && location.state.list;
  
  return (
    <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Nav />
      <div className="top">
        
      </div>
      <div className="bottom">
        <div className="right">
          <form>
          {Object.keys(list).map((key) => (
                <div className="formInput" key={key}>
                  <label>{key}</label>
                  <input
                    id={key}
                    type="text"
                    value={list[key]}
                    readOnly
                  />
                </div>
              ))}
          
         
          </form>
        </div>
      </div>
    </div>
  </div>
  )
  
}
