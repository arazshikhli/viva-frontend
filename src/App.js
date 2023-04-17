
import './App.css';
import {HomePage} from './pages/home/HomePage';
import { Header } from './components/header/Header';
import {useTranslation} from 'react-i18next'
import axios from 'axios';
import {Routes,Route,Link} from 'react-router-dom';
import {LoginPage} from './pages/login/LoginPage'
import {AboutPage} from './pages/about/AboutPage';
import {AdminPage} from './pages/admin/AdminPage';
import {GalleryPage} from './pages/gallery/GalleryPage';
import {ContactsPage} from './pages/contacts/ContactsPage'
function App() {

  const {t,i18n}=useTranslation()
  const changeLanguage=(language)=>{
    i18n.changeLanguage(language)
  }
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
