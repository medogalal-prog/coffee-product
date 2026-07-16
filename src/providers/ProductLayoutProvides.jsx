import React from 'react'
import { Outlet } from 'react-router'

function productLayoutProvides() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default productLayoutProvides
