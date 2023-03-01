import React from 'react'
import { FormContainer, Container } from '../styles/StyledComponents'
import { CustomInput } from '../common/CustomInput'
const Login = () => {
  return (
    <FormContainer
      from="login"
    >
      <CustomInput name="Email" />
      <CustomInput name="Password" />
    </FormContainer>
  )
}

export default Login