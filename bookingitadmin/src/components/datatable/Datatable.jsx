import React, { useEffect } from 'react'
import './datatable.scss'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetchdata"
import axios from 'axios';

export const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
 
   
   const {data,loading,error}=useFetch(`/${path}`)
   const [list, setList] = useState(data);
  // console.log(data)
  useEffect(() => {
    setList(data);
  }, [data]);  
    const handleDelete =async (id) => {
      try {
       await axios.delete(`/${path}/${id}`);
        setList(list.filter((item) => item._id !== id));
      } catch (err) {} 
    }; 
    

  const navigate = useNavigate();

  const handleViewClick = (params) => {
    navigate(`/${path}/${params.row._id}`, {
      state: {
        list: params.row,
      },
    });
  }
  
  
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
         // console.log(params.row)
          return (
            <div className="cellAction">
             {/* <Link  to={{
    pathname: `/${path}/${params.row._id}`,
    state: {
      list: params.row,
    },
  }} style={{ textDecoration: "none" }}>
              
                <div className="viewButton">View</div>
              </Link> */}
              <div className="viewButton"  onClick={() => handleViewClick(params)}>
        View
      </div>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row._id)}
              >
                Delete
              </div>
            </div>
          );
        },
      },
    ];
    
    
    return (
      <div className="datatable">
        <div className="datatableTitle">
          Add New {path}
          <Link to={`/${path}/new`} className="link">
            Add New
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={list}
          columns={columns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(row) => row._id}
        />
      </div>
    );
}
