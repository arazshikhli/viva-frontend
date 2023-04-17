import React, { Component,useEffect } from 'react';
import ReactDOM from 'react-dom';
import './CarouselItem.css'
import axios from '../../axios';
import { useDispatch } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imgUrl1 from '../../assets/1.jpg'
import imgUrl2 from '../../assets/2.jpg'
import imgUrl3 from '../../assets/3.jpg'
// import { fetchPhotos } from '../../redux/slices/gallery';

export const CarouselItem=()=>{
    // const dispatch=useDispatch()
    // useEffect(()=>{
    //     dispatch(fetchPhotos())
    // },[])
    return(
        <Carousel>
        <div >
            <img src={imgUrl1} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={imgUrl2}  />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img  src={imgUrl3}  />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>  
    )
}