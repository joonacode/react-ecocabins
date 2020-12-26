import React from 'react'
import { IMGLogo } from '../../assets'

const Logo = ({ className }) => {
  return (
    <>
      <img src={IMGLogo} className={className} alt='logo' />
    </>
  )
}

export default Logo
