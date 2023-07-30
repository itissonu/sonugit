import React from 'react'
import './list.css'
import { Navbar } from '../../components/navbar/Navbar.jsx'
import { Header } from '../../components/header/Header.jsx'
import { Footer} from '../../components/footer/Footer.jsx'
import { Maillist } from '../../components/maillist/Maillist.jsx'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {format} from "date-fns"
import {
    
    faCalendarDays
    
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import { Searchitem } from '../../components/searchedlist/Searchitem'
export const List = () => {
  const location=useLocation();
  const [opendate,setopenDate]=useState(false);
  const [searchtext, setSearchText] = useState(location.state.searchtext);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);

  return (
    <div><Navbar/>
    <Header typeo="list"/>
    <div className='listcontainer'>
          <div className='listcompo'>
            <div className='searchlist'>
          <h1 className='h1search'>Search</h1>
            
            <div className='lsitm'>
              <label>Destination</label>
              <input placeholder={`${searchtext}`} type='text'/>
            </div>
            <div className='lsitm'>
              <span className='checkin'>Check-in date</span>
              <span  onClick={()=>  setopenDate(!opendate)} 
                        className='Headsearchtex'>
                        {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`} 
                        </span>
                        {opendate && (<DateRange 
                            editableDateInputs={true}
                            onChange={item => 
                            setDate([item.selection]
                            )}
                            moveRangeOnFirstSelection={false}
                            ranges={date} 
                        />)}
            </div>
            <div className="lsItem">
              <label className='opt'  >Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            
            </div>
            <button>Search</button>
            </div>
            <div className='resultbox'>
                    <Searchitem/>   
                    <Searchitem/>  
                    <Searchitem/>  
                    <Searchitem/>  
                    <Searchitem/>  
                    <Searchitem/>  
                    <Searchitem/>  
                    <Searchitem/>  
                    <Searchitem/>  
                    <Searchitem/>  
                    <Searchitem/>    
            </div>
          </div>
    </div>
           <Maillist/>   
           <Footer/>                
    </div>

  )
}
