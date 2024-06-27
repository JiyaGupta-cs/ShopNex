import React, {useState} from 'react'
import * as Components from './Components';
import {useNavigate} from "react-router-dom";


const LoginSignup = () => {
  const [signIn, toggle] = React.useState(true);
  const [formData, setFormData] = useState({
      name : "",
      email : "",
      password: ""
  })
    const navigate = useNavigate()

    const handleOnChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      })
    }

    const SignUp = (e) => {
      e.preventDefault()
        const email = localStorage.getItem("email")
        if(formData.email === email){
            alert("already signed In with this account")
        }
        else{
            localStorage.setItem("name",formData.name)
            localStorage.setItem("email",formData.email)
            localStorage.setItem("password",formData.password)
            localStorage.setItem("signinemail",formData.email )
            navigate("/")
        }

    }
  function SignIn(e){
      e.preventDefault()
      const email = localStorage.getItem("email")
      const password = localStorage.getItem("password")

      if (password !== formData.password || email !== formData.email){
          alert("Wrong credentials")
      }
      else {
          localStorage.setItem("signinemail",formData.email )
          navigate("/")
      }
  }

  return(
    <Components.div>
        <Components.Container>

              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form onSubmit={SignUp}>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input required onChange={handleOnChange} value={formData.name} name="name" type='text' placeholder='Name' />
                      <Components.Input required onChange={handleOnChange} value={formData.email} type='email' name="email" placeholder='Email' />
                      <Components.Input required onChange={handleOnChange} value={formData.password} type='password' name="password" placeholder='Password' />
                      <Components.Button type="submit">Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>



              <Components.SignInContainer signinIn={signIn}>
                       <Components.Form onSubmit={SignIn}>

                           <Components.Title>Sign in</Components.Title>
                           <Components.Input required onChange={handleOnChange} value={formData.email} name="email" type='email' placeholder='Email' />
                           <Components.Input required onChange={handleOnChange} value={formData.password} name="password" type='password' placeholder='Password' />
                           <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                           <Components.Button>Sign In</Components.Button>

                       </Components.Form>
              </Components.SignInContainer>


          <Components.OverlayContainer signinIn={signIn}>
              <Components.Overlay signinIn={signIn}>

              <Components.LeftOverlayPanel signinIn={signIn}>
                  <Components.Title>Welcome Back!</Components.Title>
                  <Components.Paragraph>
                      To keep connected with us please login with your personal info
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)}>
                      Sign In
                  </Components.GhostButton>
                  </Components.LeftOverlayPanel>

                  <Components.RightOverlayPanel signinIn={signIn}>
                    <Components.Title>Hello, Friend!</Components.Title>
                    <Components.Paragraph>
                        Enter Your personal details and start journey with us
                    </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sigin Up
                        </Components.GhostButton> 
                  </Components.RightOverlayPanel>

              </Components.Overlay>
          </Components.OverlayContainer>

      </Components.Container>
    </Components.div>
      
  )
}

export default LoginSignup
