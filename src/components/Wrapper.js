import React from 'react'
import Parallex from './Parallex'

const Wrapper = ({children}) => {
  return (
    <div className='relative flex flex-col items-center justify-center w-full max-w-screen-sm px-5 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
      <Parallex pos="bottom-0" />
      <Parallex pos="bottom-0"/>
      {children}</div>
  )
}

export default Wrapper