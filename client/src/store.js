import { configureStore } from '@reduxjs/toolkit'
import resellersSlice from './reducers/resellersSlice'
import authSlice from './reducers/authReducer';


export default configureStore({
  reducer: {resellers:resellersSlice,auth:authSlice},
})