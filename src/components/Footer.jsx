import { Footer, FooterBrand, FooterTitle } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterC = () => {
  return (
  <Footer container className='border border-t-8 border-teal-500'>
    <div className='w-full max-w-7xl mx-auto'>
      <div className=''>
      <Link to='\' className='text-sm sm:text-xl font-bold dark:text-white'>
    <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white '>Study</span>
    <span className=''>circle</span>
    </Link>
 
        </div>
        <div className='grid grid-cols-1 gap-3 sm:mt-4 sm:grid sm:grid-cols-3 sm:gap-6'>
          <div className='flex flex-col sm:flex-row gap-9'>
          <Footer.Title title="about"/>
          <div>This is an app where people can share knowledge</div>
          </div>
          <div className='flex flex-col sm:flex-row gap-9'>
          <Footer.Title title="Follow Me"/>
          <div>GITHUB</div>
          </div>
          <div className='flex flex-col sm:flex-row gap-9'>
          <Footer.Title title="Piracy Policy"/>
          <div>GITHUB</div>
          <Footer.Copyright by="Sushma" year={new Date().getFullYear()}/>
          </div>
          
           
          

        </div>

    </div>

  </Footer>
   
  )
}

export default FooterC