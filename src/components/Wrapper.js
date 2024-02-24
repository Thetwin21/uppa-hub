import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center w-full px-5 lg:max-w-[1400px]'>{children}</div>
  )
}

export default Wrapper