import React from 'react'
import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput label="Email" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
          <FormInput label="Password" type="password" name="password" value={this.state.password} handleChange={this.handleChange} required />

          <div className='buttons'>
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn