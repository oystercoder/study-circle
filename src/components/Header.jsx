// import { Avatar, Button, Dropdown, DropdownDivider, Navbar, NavbarCollapse, NavbarToggle, TextInput } from 'flowbite-react'
// import React from 'react'
// import { Link } from 'react-router-dom'
// import { AiOutlineSearch } from 'react-icons/ai'
// import { FaMoon } from 'react-icons/fa'
// import { useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import {toogleTheme} from '../redux/theme/themeSlice'

// const Header = () => {
//     const path = useLocation().pathname
//     const { currentUser} = useSelector(state => state.user);
//     const dispatch = useDispatch()
//     const handle=()=>{
//         dispatch(toogleTheme())
//     }
//     // console.log(currentUser.user)
//   return (
//    <Navbar className='border bottom-2'>
//     <Link to='\' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
//     <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white'>Study</span>
//     circle
//     </Link>
//     <form>
//         <TextInput type="text" placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline' />

//         </form>
//         <Button className='w-12 h-10 lg:hidden' color="gray" pill>
//             <AiOutlineSearch />
//         </Button>

//         <div className='flex flex-row gap-2 md:order-2'>

//             <Button className="w-12 h-10 hidden sm:inline" color="grey" pill onClick={handle}><FaMoon /></Button>
//             {currentUser ? (
//                 <Dropdown arrowIcon={false} inline label={
//                     (
//                         <Avatar alt='userprofile' rounded img={currentUser.photo} />
//                     )
//                 }>
//                     <Dropdown.Header>

//                         <span className="block text-sm text-black">@{currentUser.username}</span>
//                         <span className="block text-sm text-black font-medium truncate">{currentUser.email}</span>
//                         </Dropdown.Header>
//                         <Link to="{/dashboard?tab=profile}">
//                         <Dropdown.Item>Profile</Dropdown.Item>
//                         <DropdownDivider />
//                         <Dropdown.Item>Sign Out</Dropdown.Item>

//                         </Link>

//                 </Dropdown>
//             ) :
//             (
//             <Button gradientDuoTone="tealToLime">
//                 <Link to="/signin">
//                 Sign in
//                 </Link>
//                 </Button>
//             )
//             }
//                 <NavbarToggle />
//                 </div>

//                 <Navbar.Collapse>

//                 <Navbar.Link active={path==='/'} as={'div'}>
//                     <Link to="/">Home</Link>

//                 </Navbar.Link>
//                 <Navbar.Link active={path==='/about'} as={'div'}>
//                     <Link to="/about">About</Link>

//                 </Navbar.Link>
//                 <Navbar.Link active={path==='/projects'} as={'div'}>
//                     <Link to="/projects">Topics</Link>

//                 </Navbar.Link>

//             </Navbar.Collapse>

//    </Navbar>
//   )
// }

// export default Header

import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toogleTheme } from "../redux/theme/themeSlice";
import Sidebar from "./Siidebar";

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  return (
    <Navbar className="border-b-2 ">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Study
        </span>
        Circle
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toogleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              // <Avatar alt="user" img={currentUser.profilePicture} rounded />
              <>
              <img src={currentUser.photo} className="w-8 h-8 rounded-full" />
              </>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
