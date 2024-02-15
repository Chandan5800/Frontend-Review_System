import React from 'react'
import Header from './Header'

const Base = ({title = "Welcome to our website", children}) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default Base
