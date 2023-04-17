import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../axios';


export const fetchPhotos=createAsyncThunk('photos/fetchPhotos',async()=>{
const {data}=await axios.get('/photos');
return data;
})
const initialState={
    photos:{
        items:[],
        status:'loading'
    }
}

const photosSlice=createSlice({
    name:'photos',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchPhotos.pending]:(state,action)=>{
            state.photos.status='loading'
            state.photos.items=[]
        },
        [fetchPhotos.fulfilled]:(state,action)=>{
            state.photos.status='loaded'
            state.photos.items=action.payload
        },
        [fetchPhotos.rejected]:(state,action)=>{
            state.photos.status='loaded'
            state.photos.items=[]
        },
    }
})

export const PhotosReducer=photosSlice.reducer