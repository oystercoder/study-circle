import firebase from 'firebase/compat/app'
import { Alert, Button, TextInput } from 'flowbite-react'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getDownloadURL, getStorage } from 'firebase/storage'
import { app } from '../firebase'
import { ref } from 'firebase/storage'
import { uploadBytesResumable } from 'firebase/storage'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Profile = () => {
    const user = useSelector(state => state.user)
    const [imageFile,setImageFile]=useState(null)
    const [imageFileUrl,setImageFileUrl]=useState(null)
    const [imageFileProgress,setImageFileProgress]=useState(null)
    const [imageError,setImageError]=useState(null)
    console.log(imageFileProgress,imageError)

    const fileRef=useRef();
    const handle=(e)=>{
        const file=e.target.files[0]
        if(file)
        {
            
           
            setImageFile(file)
            setImageFileUrl(URL.createObjectURL(file))
           

        }
    }
    

    const uploadImage = async () => {
        if (imageFile) {
            const storage = getStorage(app);
            const filename = new Date().getTime() + imageFile.name;
    
            const storageRef = ref(storage, filename);
            const uploadTask = uploadBytesResumable(storageRef, imageFile);
    
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setImageFileProgress(progress.toFixed(0));
                   
                },
                (error) => {
                    setImageError("Couldn't upload: the size of the file must be less than 2MB");
                    setImageFileProgress(null)
                
                   
                },
                
                
               
                async () => {
                    try {
                        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                        setImageFileUrl(downloadUrl); // Use the downloaded URL
                    } catch (error) {
                        console.error('Error getting download URL:', error);
                    }
                }
            );
        } else {
            console.error('No file selected');
        }
     
    };
    
    useEffect(() => {
        if (imageFile) {
            uploadImage();
        }
    }, [imageFile]);
    
    
    
      


  
  return (
    <div className='max-w-lg mx-auto p-3 w-full '>
        <h1 className='my-7 text-center font-semibold text-3xl'>
            Profile
        </h1>
        <input type="file" accept='image/*' onChange={handle} ref={fileRef} className='hidden' />
        <form className='flex flex-col'>
            <div className='relative w-32 h-32 self-center mb-5 shadow-md cursor-pointer overflow-hidden rounded-full' onClick={()=>{
                fileRef.current.click()
            }}>
                {
                    imageFileProgress && (
                    <CircularProgressbar value={imageFileProgress || 0} text={`${imageFileProgress}%`} strokeWidth={5} styles={
                        {
                            root:{
                                width:'100%',
                                height:'100%',
                                position:'absolute',
                                top:0,
                                left:0
                                
                            },
                            path:{
                                stroke:`rgba(62,152,199,${imageFileProgress/100})`

                            }
                        }
                    } />
                )
                
                }

                {/* {
                    if(imageFileUrl)
                    {

                    }
                } */}
            <img src={imageFileUrl||user.currentUser.photo} alt="user" className={`rounded-full w-full h-full border-white border-8 object-cover ${
                imageFileProgress && imageFile<100 && `opacity-60`
            }`}/>
            </div>
            <div>
            {/* <input type="text" className='w-full px-40' /> */}

            </div>
            {
                imageError &&
            <Alert color='failure' className='mb-5' >
                Couldn't upload: the size of the file must be less than 2MB


            </Alert>
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
