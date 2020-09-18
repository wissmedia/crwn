import React from 'react'
import './SignInAndRegisterPage.scss'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

const SignInAndRegisterPage = () => (
  <div className='sign-in-and-register'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndRegisterPage