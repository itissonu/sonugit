import React, { useState } from 'react'
import './new.scss'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Nav } from '../../components/navbar/Nav'
import axios from 'axios'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { green } from '@mui/material/colors'
export const New = ({inputs, title}) => {


const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [userCreated, setUserCreated] = useState(false); 

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");     //acording to cloudinary
   try  {
      const uploadRes = await axios.post(
       "https://api.cloudinary.com/v1_1/dbsonu270/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newUser = {
        ...info,
        img: url,
      };
      console.log(url)

      await axios.post("/auth/register", newUser);
    
      setUserCreated(true);

      setTimeout(() => {
        
        setUserCreated(false); // Clear the user created message after a delay
        clearFormFields();
      }, 3000);
      console.log(newUser)
    } catch (err) {
      console.log(err);
    }
    const clearFormFields = () => {
      const clearedInfo = {};
      inputs.forEach((input) => {
        clearedInfo[input.id] = '';
      });
      setInfo(clearedInfo);
    };
//    console.log(newUser)
  };
  return (
    <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Nav />
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

            {inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input
                  onChange={handleChange}
                  type={input.type}
                  placeholder={input.placeholder}
                  id={input.id}
                />
              </div>
            ))}
            <button onClick={handleClick}>Send</button>
          </form>
          {userCreated && <p style={{color:'green'}}>User created successfully!</p>}
        </div>
      </div>
    </div>
  </div>
  )
}
