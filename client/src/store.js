import { configureStore } from '@reduxjs/toolkit'
import resellersSlice from './reducers/resellersSlice'

export default configureStore({
  reducer: {resellers:resellersSlice},
})