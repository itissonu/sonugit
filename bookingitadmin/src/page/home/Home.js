import React from 'react'
import './home.scss'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Nav } from '../../components/navbar/Nav'
import { Widgets } from '../../components/widgets/Widgets'
import { Featured } from '../../components/featured/Featured'
import { Chart } from '../../components/chart/Chart'
import { Table, Transaction } from '../../components/table/Transaction'
export const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
      <Nav />
        <div className='widgets'>
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
        </div>
        <div className='charts'>
          <Featured/>
          <Chart/>
        </div>
     
      <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Transaction/>
        </div>
        </div>
    </div>
  )
}
