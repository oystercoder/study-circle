
import { Sidebar } from 'flowbite-react'
import { FaHome,FaUser,FaArrowRight} from 'react-icons/fa'
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Siidebar = () => {
  const location = useLocation();
  const [r, setR] = useState("");
  console.log(location);
  useEffect(() => {
    const urlparams = new URLSearchParams(location.search);

    const tabfromurl = urlparams.get("tab");
    if (tabfromurl) {
      setR(tabfromurl);
    }
    // setR(()=>r=tabfromurl)
    console.log(tabfromurl);
  }, [location.search]);

  return (
    <>
    <Sidebar className='w-full md:w-56'>
       <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile'>
         
         <Sidebar.Item active={r==='profile'} icon={FaUser} label={'user'} labelColor='dark' as="div">
          Profile
          </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={FaArrowRight} className="cursor-pointer">
          Sign Out
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
        </Sidebar.Items> 
      
    </Sidebar>
    </>
   
 
  )
}

export default Siidebar
