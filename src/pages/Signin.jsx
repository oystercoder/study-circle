import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Signin= () => {
  const [formData,setformData]=useState({})
  const [error,seterror]=useState(null)
  const[loading,setloading]=useState(false)
  const navigate=useNavigate()
  const handlechange=(e)=>{
    setformData({...formData,[e.target.id]:e.target.value.trim()})

    
  }
  const handle=async(e)=>{
    e.preventDefault()
    
    if(!formData.password||!formData.email)
      {
        return seterror("Please fill all the fields")
      }
    try{
      
setloading(true)
      
      seterror(null)
      const res=await fetch("/api/auth/signin",
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
      })


      const data=await res.json()
      if(data.success===false)
      {
        seterror(data.message)
      }
      setloading(false)
      if(res.ok)
      {
        navigate('/')
      }
    

    }

    catch(e)
    {
      seterror("Something went wrong")
      setloading(false)

    }


  }
  console.log(formData)


  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
      <div className='flex-1'>
      <Link to='\' className='text-sm sm:text-xl font-bold dark:text-white'>
    <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white text-3xl'>Study</span>
    <span className='text-5xl'>circle</span>
    </Link>
    <p className='text-sm mt-5'>
      For better Experience.Do Sign Up with Email or Google..
      </p>

      </div>
      <div className='flex-1'>
        <form className='flex flex-col gap-5' onSubmit={handle}>
          
          <div>
            <Label value="YOUR EMAIL" />
            <TextInput type='email' placeholder='example@gmail.com' id="email" className='w-full' onChange={handlechange}>

            </TextInput>

           
          </div>
          <div>
            <Label value="YOUR PASSWORD" />
            <TextInput type='password' placeholder='YOUR PASSWORD' id="password" className='w-full' onChange={handlechange}>

            </TextInput>
            <Button className='mt-5 w-full' gradientDuoTone="purpleToPink" type='submit' disabled={loading}>
  {loading ? (
    <>
      <Spinner size="sm" />
      <span className='pl-3'>Loading...</span>
    </>
  ) : (
    <span>Sign In</span>
  )}
</Button>


           
          </div>
        </form>
        <div className="mt-2">
          <span>Don't have an account?</span>
          <Link className='text-blue-500 ml-2' to="/signup">
          Sign Up</Link>
        </div>
      
        {
          error && (
            <Alert className='mt-5' color='failure'>
              {error}

            </Alert>
          )
        }



      </div>
      </div>
    </div>
  )
}

export default Signin