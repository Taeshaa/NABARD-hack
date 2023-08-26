import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import NavbarInside from '../layout/NavbarInside';
import AuthContext from '../../context/auth/authContext';
import '../../assets/css/home.css';
// import Paper from '@mui/material/Paper';
// import  DateTimePicker from '@mui/x-date-pickers/DateTimePicker';





const ContactUsForm = () => {
  //const[value, setValue]=useState(new Date())
  return (
    <div className='home-outer'>
    <div>
      <NavbarInside />
    </div>
    <div className='wrapper'>
      <form>
        <h1>Get In Touch</h1>

        <div className='row'>
          <div className='form-group col-sm-6'>
            <label htmlFor='name'>
              Name:{' '}
            </label>
            <input
              name='name'
            //   onChange={onChange}
              type='text'
              autoComplete='off'
              required
            />
          </div>

          <div className='form-group col-sm-6'>
            <label htmlFor='representative'>
             Email Id :{' '}
            </label>
            <input
              name='representative'
            //   onChange={onChange}
              type='text'
              autoComplete='off'
              required
            />
          </div>
        </div>

        <div className='row'>
          <div className='form-group col-sm-6'>
            <label htmlFor='members'>Phone Number : </label>
            <input
              name='members'
            //   onChange={onChange}
              type='text'
              autoComplete='off'
              required
            />
          </div>

          <div className='form-group col-sm-6'>
            <label htmlFor='phone'>
            Slot for Call Back:{' '}
            </label>
          </div>
          {/* <div className='dateTimePicker'>
            
            </div> */}
        </div>

        

        <input type='submit' value='Submit' className='btn-sbmt' />
        <ul class='bg-bubbles'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </form>
      {/* <DateTimePicker onChange={setValue} value={value}/> */}
    </div>
  </div>
);
  
}

export default ContactUsForm