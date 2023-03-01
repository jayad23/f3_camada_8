import React from 'react'
import { CustomInput } from '../common/CustomInput'
import { FormContainer, Container } from '../styles/StyledComponents'

const Register = () => {
  return (
    <FormContainer
      from="register"
    >
      <CustomInput name="Name" />
      <CustomInput name="Email" />
      <CustomInput name="Password" />
      <CustomInput name="Repeat Password" />
    </FormContainer>
  )
}

export default Register