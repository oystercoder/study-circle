import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
      <div className='flex-1'>
      <Link to='\' className='text-sm sm:text-xl font-bold dark:text-white'>
    <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white'>Study</span>
    circle
    </Link>
    <p className='text-sm mt-5'>
      For better Experience.Do Sign Up with Email or Google..
      </p>

      </div>
      <div className='flex-1'>
        <form className='flex flex-col gap-5'>
          <div className='mt-4 md:mt-0'>
            <Label value="USER NAME" />
            <TextInput type='text' placeholder='UserName' id="username" className='w-full'>

            </TextInput>

           
          </div>
          <div>
            <Label value="YOUR EMAIL" />
            <TextInput type='text' placeholder='YOUR EMAIL' id="email" className='w-full'>

            </TextInput>

           
          </div>
          <div>
            <Label value="YOUR PASSWORD" />
            <TextInput type='text' placeholder='YOUR PASSWORD' id="password" className='w-full'>

            </TextInput>
            <Button className='mt-5 w-full' gradientDuoTone="purpleToPink" type='submit'>
              Sign Up

            </Button>

           
          </div>
        </form>
        <div className="mt-2">
          <span>Have an account?</span>
          <Link className='text-blue-500 ml-2' to="/signin">
          Sign In</Link>
        </div>



      </div>
      </div>
    </div>
  )
}

export default Signup