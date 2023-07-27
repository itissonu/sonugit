import React from 'react'
import { useState } from 'react';
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBed,
    faC,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import "./header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
export const Header = () => {
    const [opendate,setopenDate]=useState(false);
    const [show,showOption]=useState(false);
    const[options,setOptions]=useState({
        adult:1,
        children:0,
        room:0

    })
  
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    return (
        <div className='header'>
            <div className='headContainer'>
                <div className='headerlist'>
                    <div className='headitem active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Hotels</span>
                    </div>
                    <div className='headitem'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className='headitem'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rental</span>
                    </div>
                    <div className='headitem'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className='headitem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className='headerTitle'>Discover Comfort and Savings in Every Stay</h1>
                <p className='headerDescription'>Welcome to our luxurious hotel, where comfort meets affordability. Enjoy a lavish stay at our well-appointed rooms and indulge in top-notch amenities. And the best part? Unbelievable discounts await you, making your dream vacation a reality</p>
                <button className='headerbutton'>Sign in/Register</button>
                <div className='headersearch'>
                    <div className='headerSearchitem'>
                        <FontAwesomeIcon icon={faBed} />
                        <input type='text ' placeholder='where are you going' className='Headsearchinput' />
                    </div>
                    <div className='headerSearchitem'>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span  onClick={()=>  setopenDate(!opendate)} className='Headsearchtext'>
                        {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`} 
                        </span>
                       {opendate && (<DateRange 
                            editableDateInputs={true}
                            onChange={item => 
                            setDate([item.selection]
                            )}
                            moveRangeOnFirstSelection={false}
                            ranges={date} className='calender'
                        />)}
                    </div>
                    <div className='headerSearchitem'>
                        <FontAwesomeIcon icon={faPerson} />
                        <span  onClick={()=>{ showOption(!show) }}className='Headsearchtext'>{`Adult ${options.adult} child ${options.children} room ${options.room} `}</span>
                       { show && <div className='options'>
                            <div className='optionsitem'>
                                <span className='optiontext'>Adult</span>
                                <div className='signcon'>
                                <button className='optcounterbutton'>+</button>
                                <span className='showOptionnumber'>1</span>
                                <button className='optcounterbutton'>-</button></div>
                            </div>
                            <div className='optionsitem'>
                                <span className='optiontext'>children</span>
                                <div className='signcon'>
                                <button className='optcounterbutton'>+</button>
                                <span className='showOptionnumber'>1</span>
                                <button className='optcounterbutton'>-</button></div>
                            </div>
                            <div className='optionsitem'>
                                <span className='optiontext'>room</span>
                                <div className='signcon'>
                                <button className='optcounterbutton'>+</button>
                                <span className='showOptionnumber'>1</span>
                                <button className='optcounterbutton'>-</button></div>
                            </div>
                        </div> }
                    </div>
                    <button className='headersearchitembtn'>Search</button>
                </div>
            </div>
        </div>
    )
}
