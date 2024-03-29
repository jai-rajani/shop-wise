import { createSlice } from '@reduxjs/toolkit'

export const resellersSlice = createSlice({
  name: 'resellers',
  initialState: {
    value: [],
    finalValue:[],
    search:'',
    sort:'',
  },
  reducers: {
  
    modify: (state, action) => {
      state.value = action.payload
    },
    modify_final: (state, action) => {
      state.finalValue = action.payload
    },
    modify_search:(state,action)=>{
      state.search=action.payload
    },
    modify_sort:(state,action)=>{
      state.sort=action.payload
    }
    
  },
})


export const {modify,modify_final,modify_search,modify_sort} = resellersSlice.actions

export default resellersSlice.reducer