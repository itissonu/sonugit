import React, { useState } from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import './hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowCircleLeft, faCancel, faCross, faLocation, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { Maillist } from '../../components/maillist/Maillist'
import { Footer } from '../../components/footer/Footer'

export const Hotel = () => {
 const[show,setShow]=useState(false);
 const[index,setIndex]=useState(0);   //intially 1st element is passed


const handleshow=(i)=>{
  setShow(!show);
  setIndex(i);
}
const handledir=(directon)=>{
let newindex=index;
if(directon==='left')
index===0?newindex=8:newindex-=1;
if(directon==='right')
index===8?newindex=0:newindex+=1;
setIndex(newindex)
}

  const photos=[{
    src:" https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg"},
   {src:"https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg "},
   {src:" https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_1280.jpg"},
    {src:"https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg "},
    {src:"https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_1280.jpg "},
    {src:"https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg "},
    {src:" https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_1280.jpg"},
    {src:"https://cdn.pixabay.com/photo/2017/03/28/12/16/chairs-2181980_1280.jpg "},
    {src:"https://cdn.pixabay.com/photo/2017/03/25/23/32/kitchen-2174593_1280.jpg "
    
  },];
  return (
    
    <div><Navbar/>
    <Header typeo="list"/>
    <div className='hotelshowcontainer'>
    {show && <div className='imagesliderwrap'>
    <FontAwesomeIcon className='faright' onClick={()=>handledir('left')} icon={faArrowCircleLeft}/>
    <div className='sliderimgcont'>
    <img className='sliderimg' src={photos[index].src} ></img>
    </div>
 
    <FontAwesomeIcon onClick={()=>handledir('right')} className='faleft'icon={faArrowAltCircleRight}/>
    <FontAwesomeIcon className='into' onClick={()=>setShow(false)}  icon={faXmarkCircle}/>

    </div>}
      <div className='hotelplace'>
        <h1 className='hotelname'>Hotel taj Mumbai</h1>
        
        <span className='addres'><FontAwesomeIcon icon={faLocation}/>Royal Paradise , 4567 Sample Road, Mumbai</span>
        <span className='ratetheplace'> Excelent Location - Near The Airport</span>
        <span className='book'>Book Now at $122 and get a free coupon code for OLA riding</span>
        <button className='registernow'>Reserve or Book</button>
      </div>
      <div className='imgcontainer'>
      {photos.map((image,i) => {      //2nd params goes for the index of the element in the array
            return (
              <div className='image'>
                <img  onClick={()=>handleshow(i)} src={image.src} alt='no' />
              </div>
            );
          })}
      </div>
      <div className='moredetais'>
        <div className='desc'>
          <h1>Reason to be here</h1>
          <p>
          Welcome to Paradise Luxury Hotel

Discover a serene retreat at Paradise Luxury Hotel, ideally located near the iconic City Center Park, offering breathtaking views of lush greenery and tranquil water features.

Hotel Details:
- Elegant rooms and suites with modern amenities
- Rooftop restaurant serving delectable cuisines
- State-of-the-art spa for ultimate relaxation
- Conference facilities for business travelers

Whether you're here for leisure or business, our dedicated team ensures an extraordinary experience. Come and indulge in the allure of Paradise Luxury Hotel, where sophistication meets serenity.

          </p>
        </div>
        <div className='price0'>
          <h4>Perfect for 7nights</h4>
          <p>Nestled in the heart of a bustling metropolis, Paradise Luxury Hotel offers you an enchanting retreat that combines modern comfort with timeless elegance. 
</p>
          <span>$675(5days)</span>
          <button>Reserve or Book!</button>
        </div>
      </div>
      
    </div>
    
    <Maillist/>
    <Footer/>
    </div>
  )
}
