import React, { useEffect, useState } from 'react'
import { roomInputs } from '../../formSource'
import { Nav } from '../../components/navbar/Nav'
import { Sidebar } from '../../components/sidebar/Sidebar'
import useFetch from '../../hooks/useFetchdata'
import axios from "axios";
export const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);
  
  const [data, setRoomsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/hotels');
        console.log(response.data);
        setRoomsData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange =(e)=>{
    setInfo((prev)=>({
      ...prev,[e.target.id]:e.target.value
    }) )                
  }
  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
      await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Nav />
      <div className="top">
        <h1>Add New Room</h1>
      </div>
      <div className="bottom">
        <div className="right">
          <form>
            {roomInputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="formInput">
              <label>Rooms</label>
              <textarea
                onChange={(e) => setRooms(e.target.value)}
                placeholder="give comma between room numbers."
              />
            </div>
            <div className="formInput">
              <label>Choose a hotel</label>
              <select
                id="hotelId"
                onChange={(e) => setHotelId(e.target.value)}
              >
                {loading
                  ? "loading"
                  : data &&
                  data.map((hotel) => (
                      <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                    ))}
              </select>
            </div>
            <button onClick={handleClick}>Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
