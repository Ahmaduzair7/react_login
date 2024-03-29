import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.png';
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';
function Register() {

  const [file, setFile] = useState();

  const formik = useFormik({
   initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values , {profile: file || ''})
      console.log(values)
    }
  });

  const onUpload = async e =>{
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
    
  }

  return (
    <div className='conatiner mx-auto'>
      <Toaster position='top-center ' reverseOrder= {false}></Toaster>
      <div className='flex justify-center items-center h-screen mt-20'>
        <div className={styles.glass} style={{width: "40%", height: '700px'}}>

          <div className='title flex flex-col items-center'>
            <h4 className='text-3xl font-bold'>Register</h4>
            <span className='py-3 text-xl w-2/3 text-center text-gray-500'>welcome to span</span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor='profile'>
              <img src={file || avatar} className={styles.profile_img} alt='avatar' />
              </label>
              <input onChange={onUpload} type='file' id='profile' name='profile' />
            </div>
            <div className='textbox flex flex-col items-center gap-6'>
              <input {...formik.getFieldProps('email')} type='email' placeholder='Email*'  className={styles.textbox}/>
              <input {...formik.getFieldProps('username')} type='text' placeholder='Username'  className={styles.textbox}/>
              <input {...formik.getFieldProps('password')} type='password' placeholder='Password'  className={styles.textbox}/>
              <button type='submit' className={styles.btn}>Register</button>
            </div>
            <div className='text-center py-4'>
            <span className=' text-gray-500'>Already Register? <Link className='text-red-500' to="/">Login</Link></span>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Register