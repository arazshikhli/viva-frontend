import React from "react";
import './Header.css';
import {useTranslation} from 'react-i18next';
import {Routes,Route,Link} from 'react-router-dom';
import {HomePage} from '../../pages/home/HomePage';
import {AboutPage} from '../../pages/about/AboutPage';
import {AdminPage} from '../../pages/admin/AdminPage';
import {GalleryPage} from '../../pages/gallery/GalleryPage';
export const Header=()=>{
    const {t,i18n}=useTranslation()
    const changeLanguage=(language)=>{
        i18n.changeLanguage(language)
    }
return(
    <header className="flex py-4 justify-between items-center">
        <div className="lang-items">
            <ul className="lang-list list">
               <li ><button onClick={()=>changeLanguage('aze')}><span className="btn-text">AZE</span></button></li> 
               <li ><button onClick={()=>changeLanguage('en')}><span>EN</span></button></li>
               <li ><button onClick={()=>changeLanguage('ru')}><span>RU</span></button></li>  
         
            </ul>
        </div>

        <div className="navigation">
        <ul className="nav-list list">
            <li><Link to='/' className="my-link">{t('home')}</Link> </li>
            <li><Link to='/about' className="my-link">{t('about')}</Link> </li>
            <li><Link to='/gallery' className="my-link">{t('gallery')}</Link> </li>
            <li><Link to='/contacts' className="my-link">{t('contacts')}</Link> </li>
            <li><Link to='/admin' className="my-link">{t('admin')}</Link> </li>
            {/* <li> <a href="">{t('home')}</a></li>
            <li> <a href="">{t('galery')}</a></li>
            <li> <a href="">{t('about')}</a></li>
            <li> <a href="">{t('contact')}</a></li> */}
        </ul>
        </div>
  
    </header>
)

}