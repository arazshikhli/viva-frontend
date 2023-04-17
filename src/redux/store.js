import {configureStore} from '@reduxjs/toolkit'
import { PhotosReducer } from './slices/gallery'

const store=configureStore({
    reducer:{},
    photos:PhotosReducer
})

export default store