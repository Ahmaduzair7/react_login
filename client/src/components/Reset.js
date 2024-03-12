import React from 'react'
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from '../helper/validate';
function Reset() {

  const formik = useFormik({
   initialValues: {
      password: '',
      confirmPwd: ''
    },
    validate: resetPasswordValidation,
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
        <div className={styles.glass} style={{width: "40%"}}>

          <div className='title flex flex-col items-center'>
            <h4 className='text-3xl font-bold'>Reset Password</h4>
            <span className='py-3 text-xl w-2/3 text-center text-gray-500'>Enter Your Password</span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
    
            <div className='textbox flex flex-col items-center gap-6'>
              <input {...formik.getFieldProps('password')} type='password' placeholder='New Password Here'  className={styles.textbox}/>
              <input {...formik.getFieldProps('confirmPwd')} type='password' placeholder='Confirm Password'  className={styles.textbox}/>
              <button type='submit' className={styles.btn}>Reset</button>
            </div>
           
          </form>

        </div>
      </div>
    </div>
  )
}

export default Reset