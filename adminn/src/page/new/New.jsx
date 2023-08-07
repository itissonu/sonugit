import React, { useState } from 'react'
import './new.scss'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Nav } from '../../components/navbar/Nav'
export const New = () => {
  const [file, setFile] = useState("");
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Nav/>
        <div className='top'>
          <h1>Add New User</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
    <img src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              } alt='' className='avatar'/>
   
          </div>
          <div className='right'>
   <form>
   <div className='formInput'>
  <label>Profile Photo</label>
  <input type='file' accept='image/*'  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                   />
</div>
    <div className='formInput'>
      <label>Username</label>
      <input type='text' placeholder='sonu'/>
    </div>
   

  <div className='formInput'>
    <label>Email</label>
    <input type='email' placeholder='johndoe@example.com'/>
  </div>

  <div className='formInput'>
    <label>Password</label>
    <input type='password' placeholder='********'/>
  </div>

  <div className='formInput'>
    <label>Phone Number</label>
    <input type='tel' placeholder='123-456-7890'/>
  </div>

  <div className='formInput'>
    <label>Country</label>
    <input type='text' placeholder='Country'/>
  </div>

  <div className='formInput'>
    <label>City</label>
    <input type='text' placeholder='City'/>
  </div>
  <div className='formInput'>
    <label>Aadhar</label>
    <input type='text' placeholder='City'/>
  </div>

   </form>
   <div className='btnn'>
    <button className='btn'>Send</button>
  </div>
          </div>
        </div>
      </div>
    </div>
  )
}
