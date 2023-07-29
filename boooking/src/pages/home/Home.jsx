import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import { Feature } from '../../components/feature/Feature'
import './home.css'
import { Property } from '../../components/propertylist/Property'
import { Featuredproperty } from '../../components/featureproperty/Featuredproperty'
import { Maillist } from '../../components/maillist/Maillist'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='homecontainer'>
       
        <Feature/>
        <h1 className='hometitle'>Browse by property type</h1>
        <Property/>
        <h1 className='hometitle'>Home guest love</h1>
        <Featuredproperty/>
        </div>
        <Maillist/>
        <Footer/>
    </div>
  )
}
