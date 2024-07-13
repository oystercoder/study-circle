import { configureStore } from '@reduxjs/toolkit'
import userreducer from '../redux/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userreducer
    
  },
})