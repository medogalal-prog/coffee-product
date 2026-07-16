import { Routing } from '@/routes/routes'
import React from 'react'
import { RouterProvider } from 'react-router'
const App = () => {
  return (
    <RouterProvider router={Routing} />
  )
}

export default App