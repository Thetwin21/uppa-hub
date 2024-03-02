import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-screen-sm px-5 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>{children}</div>
  )
}

export default Wrapper