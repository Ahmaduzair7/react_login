import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.png';
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { validatePassword } from '../helper/validate';
function Password() {

  const formik = useFormik({
   initialValues: {
      password: ''
    },
    validate: validatePassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values)
    }
  });


  return (
    <div className='conatiner mx-auto'>
      <Toaster position='top-center ' reverseOrder= {false}></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className='title flex flex-col items-center'>
            <h4 className='text-3xl font-bold'>hello again</h4>
            <span className='py-3 text-xl w-2/3 text-center text-gray-500'>welcome to span</span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src={avatar} className={styles.profile_img} alt='avatar' />
            </div>
            <div className='textbox flex flex-col items-center gap-6'>
              <input {...formik.getFieldProps('password')} type='password' placeholder='Password'  className={styles.textbox}/>
              <button type='submit' className={styles.btn}>Sign in</button>
            </div>
            <div className='text-center py-4'>
            <span className=' text-gray-500'>Forgot Password? <Link className='text-red-500' to="/recovery">Recover Now</Link></span>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Password