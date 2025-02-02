import React from 'react'
import Navbar from '@/components/navbar'
// import Footer from '@/components/footer'

const LayoutPage = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex-col w-full min-h-full'>
        <Navbar/>
        <main className='w-full min-h-full'>{children}</main>
        {/* <Footer/> */}
    </div>
  )
}

export default LayoutPage