import React from 'react'
import HeaderMenu from '../components/headerMenu'
import {Outlet} from "react-router-dom";


export default function Root() {
  return (
    <>
    <HeaderMenu/>
    <Outlet />
    </>
  )
}
