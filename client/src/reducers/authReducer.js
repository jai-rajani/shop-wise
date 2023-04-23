import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login:false,
  user:null,
  sneakers:[]
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin: (state, action) => {
     state.login=true
     state.user=action.payload;
    },
    
    authLogout: (state) => {
      state.login = false;
      state.user=null;
    },
    addSneakers:(state,action)=>{
      state.sneakers.push(action.payload);
      },
    setSneakers:(state,action)=>{
      state.sneakers=action.payload;
    }
    }
   
  ,
});

export const { authLogin, authCheckingFinish, authLogout ,addSneakers,setSneakers} = authSlice.actions;
export default authSlice.reducer;
