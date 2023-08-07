import React from 'react'
import './list.scss'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Nav } from '../../components/navbar/Nav'
import { Datatable } from '../../components/datatable/Datatable'
export const List = () => {
  return (
    <div className='list'>
  <Sidebar/>
  <div className='listContainer'>
    <Nav/>
    <Datatable/>
  </div>
    </div>
  )
}
