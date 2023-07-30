import React from 'react'
import './searchedlist.css'

export const Searchitem = () => {
  return (
    <div>
        <div className='searchitmcont'>
            <img src='https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_1280.jpg' alt='ok' className='searchimg'/>
            
            <div className='searchdesc'>
            <h2>Apartment Name: Example Apartments</h2>
    <span className='landmark'>Landmark: Central Park</span>
    <span className='free-buside'>Free Buside: Available</span>
    <span className='room-details'>Room Details: 2 BHK</span>

    
  
    <span className='facilities'>Facilities: Swimming pool, Gym, Parking</span>
    
    <span className='free-cancellation'>Free Cancellation </span><span className='cancel'> There is no charge ,you can cancel later</span>
            </div>
            <div className='searchdetails'>
  <div className='rating'>
    <span className='ratingheading'>Amaizing</span>
    <button>8.9</button>
  </div>
  <div className='amountd'>
    <span className='price'><span>&#8377;</span>1112</span>
    <span>Incliding all taxes</span>
    <button>See availibility</button>
  </div>
            </div>
        </div>
    </div>
  )
}
