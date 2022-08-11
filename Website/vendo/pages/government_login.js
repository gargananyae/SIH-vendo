import React , { useEffect }from 'react'
import Button from 'react-bootstrap/Button';
import Router from 'next/router';
import CommonInput from './components/CommonInput';

export default function government_login() {

  var login= e =>{
    Router.push('/dashboard')
  }

  return (
    <div className='govt-login-container'>
      {/* <a href="/dashboard"> */}
      <CommonInput placeholderText='Enter Govt official ID'/>
      <CommonInput placeholderText='Enter password'/>
      <Button variant="primary" className='pending-application-banner' onClick={login}>Login</Button>
      {/* </a> */}
    </div>
  )

}
