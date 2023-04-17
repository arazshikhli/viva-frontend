import React,{useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loginAdmin } from "../../redux/slices/authSlice";
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next';

export const LoginPage=()=>{
    const {t,i18n}=useTranslation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch=useDispatch()
    const handleSubmit = () => {
        try {
            dispatch(loginAdmin({ email, password }))
            console.log('login')
        } catch (error) {
            console.log(error)
        }
    }
    return ( <form
        onSubmit={(e) => e.preventDefault()}
        className='w-1/4 h-60 mx-auto mt-40'
    >
        <h1 className='text-lg text-white text-center'>{t('login_title')}</h1>
        <label className='text-xs text-gray-400'>
        {t('email_title')}:
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('email')}
                className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
            />
        </label>

        <label className='text-xs text-gray-400'>
            {t('pass_title')}:
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('password')}
                className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
            />
        </label>

        <div className='flex gap-8 justify-center mt-4'>
            <button
                type='submit'
                onClick={handleSubmit}
                className='flex justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-2 px-4'
            >
                {t('login_btn')}
            </button>
            <Link
                to='/register'
                className='flex justify-center items-center text-xs text-white'
            >
                Нет аккаунта ?
            </Link>
        </div>
    </form>
    )
}