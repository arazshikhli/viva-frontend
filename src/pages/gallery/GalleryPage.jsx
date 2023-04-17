import React from 'react'
import './GalleryPage.css';
import { CarouselItem } from '../../components/Carousel/CarouselItem';
import {useTranslation} from 'react-i18next';
export const GalleryPage = () => {
  const {t,i18n}=useTranslation()
  const changeLanguage=(language)=>{
      i18n.changeLanguage(language)
  }
  return (
    <div className='gallery'>
      <h1>{t('gallery')}</h1>
      <div className='works-slider'>
        <div className='slider-carousel'>
        <CarouselItem/>
        </div>
  

      </div>
   
    </div>
  )
}

