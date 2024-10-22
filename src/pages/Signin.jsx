import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signInSuccess,signInStart } from '../redux/user/userSlice'
import { useDispatch,useSelector } from 'react-redux'
import { signInFailure ,clearError} from '../redux/user/userSlice'
import Oath from '../components/Oath'


// const Signin= () => {
//   const dispatch=useDispatch()
//   const [formData,setformData]=useState({})
//   const {loading,error:error}=useSelector(state=>state.user)
//   const navigate=useNavigate()
//   const handlechange=(e)=>{
//     setformData({...formData,[e.target.id]:e.target.value.trim()})

    
//   }
//   const handle=async(e)=>{
//     console.log("entekrrrrrrrrrrrrrrrrrrrrrrrrrr")
//     e.preventDefault()
    
//     if(!formData.password||!formData.email)
//       {
//         return dispatch(signInFailure("enter all the details"))
//       }
//     try{
//       dispatch(signInStart())
//       try {
//         const res = await fetch("/api/auth/signin", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });
      
//         if (!res.ok) {
//           // Handle error response
//           throw new Error(`Error: ${res.status} ${res.statusText}`);
//         }
      
//         const data = await res.json();
//         // Do something with the data
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
      

//       const data=await res.json()
//       if(data.success===false)
//       {
//         dispatch(signInFailure(data.message))
//       }
      
//       if(res.ok)
//       {
//         dispatch(signInSuccess(data.user))
//         navigate('/')
//       }
    

//     }

//     catch(e)
//     {
//       dispatch(signInFailure(error.message))

//     }


//   }
//   console.log(formData)


//   return (
//     <div className='min-h-screen mt-20'>
//       <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
//       <div className='flex-1'>
//       <Link to='\' className='text-sm sm:text-xl font-bold dark:text-white'>
//     <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white text-3xl'>Study</span>
//     <span className='text-5xl'>circle</span>
//     </Link>
//     <p className='text-sm mt-5'>
//       For better Experience.Do Sign Up with Email or Google..
//       </p>

//       </div>
//       <div className='flex-1'>
//         <form className='flex flex-col gap-5' onSubmit={handle}>
          
//           <div>
//             <Label value="YOUR EMAIL" />
//             <TextInput type='email' placeholder='example@gmail.com' id="email" className='w-full' onChange={handlechange}>

//             </TextInput>

           
//           </div>
//           <div>
//             <Label value="YOUR PASSWORD" />
//             <TextInput type='password' placeholder='YOUR PASSWORD' id="password" className='w-full' onChange={handlechange}>

//             </TextInput>
//             <Button className='mt-5 w-full' gradientDuoTone="purpleToPink" type='submit' disabled={loading}>
//   {loading ? (
//     <>
//       <Spinner size="sm" />
//       <span className='pl-3'>Loading...</span>
//     </>
//   ) : (
//     <span>Sign In</span>
//   )}
// </Button>
// <Oath />


           
//           </div>
//         </form>
//         <div className="mt-2">
//           <span>Don't have an account?</span>
//           <Link className='text-blue-500 ml-2' to="/signup">
//           Sign Up</Link>
//         </div>
      
//         {
//           error && (
//             <Alert className='mt-5' color='failure'>
//               {error}

//             </Alert>
//           )
//         }



//       </div>
//       </div>
//     </div>
//   )
// }

// export default Signin


const Signin = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { loading, error } = useSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value.trim() }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Enter all the details"));
    }

    dispatch(signInStart());

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to sign in");
      }

      if (data.user) {
        dispatch(signInSuccess(data.user));
        navigate('/');
      } else {
        dispatch(signInFailure("Unexpected response format"));
      }

    } catch (err) {
    
      dispatch(signInFailure("This is the error"));
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
        <div className='flex-1'>
          <Link to='/' className='text-sm sm:text-xl font-bold dark:text-white'>
            <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white text-3xl'>Study</span>
            <span className='text-5xl'>circle</span>
          </Link>
          <p className='text-sm mt-5'>
            For better Experience. Do Sign Up with Email or Google.
          </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <div>
              <Label value="YOUR EMAIL" />
              <TextInput type='email' placeholder='example@gmail.com' id="email" className='w-full' onChange={handleChange} />
            </div>
            <div>
              <Label value="YOUR PASSWORD" />
              <TextInput type='password' placeholder='YOUR PASSWORD' id="password" className='w-full' onChange={handleChange} />
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
              Sign Up
            </Link>
          </div>
          {error && (
            <Alert className='mt-5 mx-auto text-center' color='failure'>
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
