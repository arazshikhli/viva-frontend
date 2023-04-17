import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
const initialState={
    admin:null,
    token:null,
    isLoading:false,
    status:null
}

export const loginAdmin=createAsyncThunk('auth/loginUser',async(email,password)=>{
try {
  const {data}=await axios.post('/auth/login',{
    email,password
  })  
  if(data.token){
    window.localStorage.setItem('token',data.token)
  }
  return data
} catch (error) {
    
}
})

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:{
        [loginAdmin.pending]:(state)=>{
             state.isLoading=true
             state.status=null
        },
        [loginAdmin.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.admin=action.payload.admin
            state.token=action.payload.token
            state.status=action.payload.message  
        },
        [loginAdmin.rejected]:(state,action)=>{
            state.isLoading=false
            state.status=null
        }
    }
})

export default authSlice.reducer