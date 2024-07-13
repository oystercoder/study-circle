import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { Button } from 'flowbite-react';
import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Oath = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleg = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const result = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: result.user.email,
          username: result.user.displayName,
          image: result.user.photoURL,
        }),
      });

      const data = await res.json();
      if (res.ok === true) {
        dispatch(signInSuccess(data));
        navigate('/');
      }

      console.log('User signed in:', result.user);
    } catch (error) {
      console.error('Sign-in error:', error.message);
    }
  };

  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline className='min-w-full mt-5' onClick={handleg}>
      <AiFillGoogleCircle className='w-6 h-6' />
      <span className='ml-2'>Sign in with Google</span>
    </Button>
  );
};

export default Oath;
