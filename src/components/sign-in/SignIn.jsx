import React from 'react'
import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'


class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
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
          <CustomButton type="submit">SIGN IN</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn