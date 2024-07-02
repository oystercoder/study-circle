import { Button, Navbar, NavbarCollapse, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const path = useLocation().pathname
  return (
   <Navbar className='border bottom-2'>
    <Link to='\' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
    <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white'>Study</span>
    circle
    </Link>
    <form>
        <TextInput type="text" placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline' />
        
        </form>
        <Button className='w-12 h-10 lg:hidden' color="gray" pill>
            <AiOutlineSearch />
        </Button>
       
        <div className='flex flex-row gap-2 md:order-2'>
            <Button className="w-12 h-10 hidden sm:inline" color="grey" pill><FaMoon /></Button>
            <Button gradientDuoTone="tealToLime">
                <Link to="/signin">
                Sign in
                </Link>
                </Button>
                <NavbarToggle />
                </div>
        
       
                <Navbar.Collapse>
                
                <Navbar.Link active={path==='/'} as={'div'}>
                    <Link to="/">Home</Link>
                   
                </Navbar.Link>
                <Navbar.Link active={path==='/about'} as={'div'}>
                    <Link to="/about">About</Link>
                   
                </Navbar.Link>
                <Navbar.Link active={path==='/projects'} as={'div'}>
                    <Link to="/projects">Topics</Link>
                   
                </Navbar.Link>
                


            </Navbar.Collapse>

       
   
   </Navbar>
  )
}

export default Header