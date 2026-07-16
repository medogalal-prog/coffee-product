import { cn } from '@/lib/utils'
import React from 'react'
import { NavLink } from 'react-router'

const LinkComponent=({url,children,className})=> {
  return (
    <NavLink end to={url} className={({ isActive }) => cn("px-4 py-1 border border-black/20 rounded-lg text-sm capitalize", `${isActive ? "bg-primary text-background" : ""}`, className)}>{children}</NavLink>
  )
}

export default LinkComponent
