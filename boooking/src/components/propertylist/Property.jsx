import React from 'react'
import './property.css'
export const Property = () => {
  return (
    <div>
        <div className='plcontainer'>
            <div className='pllistcard'>
                <img src='https://images.freeimages.com/images/large-previews/b6b/hotel-room-1217627.jpg' className='pllistimg'></img>
                <div className='pltitle'>
                    <h1>Hotels</h1>
                    <h2>223 hotels</h2>
                </div>
            </div>
            <div className='pllistcard'>
                <img src='https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884_1280.jpg' className='pllistimg'></img>
                <div className='pltitle'>
                    <h1>Apartments</h1>
                    <h2>223 hotels</h2>
                </div>
            </div>
            <div className='pllistcard'>
                <img src='https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_1280.jpg' className='pllistimg'></img>
                <div className='pltitle'>
                    <h1>Resorts</h1>
                    <h2>223 hotels</h2>
                </div>
            </div>
            <div className='pllistcard'>
                <img src='https://cdn.pixabay.com/photo/2021/04/05/18/02/villa-balbiano-6154200_1280.jpg' className='pllistimg'></img>
                <div className='pltitle'>
                    <h1>Villas</h1>
                    <h2>223 hotels</h2>
                </div>
            </div>
            <div className='pllistcard'>
                <img src='https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg' className='pllistimg'></img>
                <div className='pltitle'>
                    <h1>Cabins</h1>
                    <h2>223 hotels</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
