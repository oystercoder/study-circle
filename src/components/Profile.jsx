import { Button, TextInput } from 'flowbite-react'
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector(state => state.user)
  
  return (
    <div className='max-w-lg mx-auto p-3 w-full '>
        <h1 className='my-7 text-center font-semibold text-3xl'>
            Profile
        </h1>
        <form className='flex flex-col'>
            <div className='w-32 h-32 self-center mb-5 shadow-md cursor-pointer overflow-hidden rounded-full'>
            <img src={user.currentUser.photo} alt="user" className='rounded-full w-full h-full border-white border-8 object-cover'/>
            </div>
            <div>
            {/* <input type="text" className='w-full px-40' /> */}

            </div>
            {
                console.log(user.currentUser.username)
            }
            <TextInput type="text"  defaultValue={user.currentUser.username} placeholder='UserName' id="username" className='text-white mb-4' />
            <TextInput type="email"  defaultValue={user.currentUser.email} placeholder='email' id="email" className='text-white mb-4' />
            <TextInput type="password"  defaultValue="***************" placeholder='password' id="password" className='text-white mb-4' />
            <Button type="submit"  gradientDuoTone='purpleToPink' outline >
                Update

            </Button>
            <div className='flex justify-between mt-5 '>
                <span className='text-red-500 hover:cursor-pointer'>
                    Delete Account
                </span>
                <span className='text-blue-800 cursor-pointer'>
                    LogOut
                </span>
            </div>

            

            
            
          
       
        
        </form>

      
    </div>
  )
}

export default Profile
