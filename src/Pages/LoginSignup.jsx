import React from 'react'
import * as Components from './Components';


const LoginSignup = () => {
  const [signIn, toggle] = React.useState(true);
  return(
    <Components.div>
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
              <Components.Form>
                  <Components.Title>Create Account</Components.Title>
                  <Components.Input type='text' placeholder='Name' required />
                  <Components.Input type='email' placeholder='Email' required/>
                  <Components.Input type='password' placeholder='Password' required />
                  <Components.Button>Sign Up</Components.Button>
              </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
               <Components.Form>
                   <Components.Title>Sign in</Components.Title>
                   <Components.Input type='email' placeholder='Email' required />
                   <Components.Input type='password' placeholder='Password' required  />
                   <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                   <Components.Button>Sigin In</Components.Button>
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


// import React from 'react';
// import * as Components from './Components';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const LoginSignup = () => {
//   const [signIn, toggle] = React.useState(true);

//   const SignupSchema = Yup.object().shape({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string().min(6, 'Password is too short - should be 6 chars minimum.').required('Password is required')
//   });

//   const SigninSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string().min(6, 'Password is too short - should be 6 chars minimum.').required('Password is required')
//   });

//   return (
//     <Components.div>
//       <Components.Container>
//         <Components.SignUpContainer signinIn={signIn}>
//           <Formik
//             initialValues={{ name: '', email: '', password: '' }}
//             validationSchema={SignupSchema}
//             onSubmit={values => {
//               console.log(values);
//               // Handle signup form submission
//             }}
//           >
//             {({ errors, touched }) => (
//               <Form>
//                 <Components.Title>Create Account</Components.Title>
//                 <Field name="name" type="text" placeholder="Name" className={errors.name && touched.name ? 'input-error' : ''} />
//                 <ErrorMessage name="name" component="div" className="error-message" />
//                 <Field name="email" type="email" placeholder="Email" className={errors.email && touched.email ? 'input-error' : ''} />
//                 <ErrorMessage name="email" component="div" className="error-message" />
//                 <Field name="password" type="password" placeholder="Password" className={errors.password && touched.password ? 'input-error' : ''} />
//                 <ErrorMessage name="password" component="div" className="error-message" />
//                 <Components.Button type="submit">Sign Up</Components.Button>
//               </Form>
//             )}
//           </Formik>
//         </Components.SignUpContainer>

//         <Components.SignInContainer signinIn={signIn}>
//           <Formik
//             initialValues={{ email: '', password: '' }}
//             validationSchema={SigninSchema}
//             onSubmit={values => {
//               console.log(values);
//               // Handle signin form submission
//             }}
//           >
//             {({ errors, touched }) => (
//               <Form>
//                 <Components.Title>Sign in</Components.Title>
//                 <Field name="email" type="email" placeholder="Email" className={errors.email && touched.email ? 'input-error' : ''} />
//                 <ErrorMessage name="email" component="div" className="error-message" />
//                 <Field name="password" type="password" placeholder="Password" className={errors.password && touched.password ? 'input-error' : ''} />
//                 <ErrorMessage name="password" component="div" className="error-message" />
//                 <Components.Anchor href="#">Forgot your password?</Components.Anchor>
//                 <Components.Button type="submit">Sign In</Components.Button>
//               </Form>
//             )}
//           </Formik>
//         </Components.SignInContainer>

//         <Components.OverlayContainer signinIn={signIn}>
//           <Components.Overlay signinIn={signIn}>
//             <Components.LeftOverlayPanel signinIn={signIn}>
//               <Components.Title>Welcome Back!</Components.Title>
//               <Components.Paragraph>
//                 To keep connected with us please login with your personal info
//               </Components.Paragraph>
//               <Components.GhostButton onClick={() => toggle(true)}>
//                 Sign In
//               </Components.GhostButton>
//             </Components.LeftOverlayPanel>

//             <Components.RightOverlayPanel signinIn={signIn}>
//               <Components.Title>Hello, Friend!</Components.Title>
//               <Components.Paragraph>
//                 Enter Your personal details and start journey with us
//               </Components.Paragraph>
//               <Components.GhostButton onClick={() => toggle(false)}>
//                 Sign Up
//               </Components.GhostButton>
//             </Components.RightOverlayPanel>
//           </Components.Overlay>
//         </Components.OverlayContainer>

//       </Components.Container>
//     </Components.div>
//   )
// }

// export default LoginSignup;
