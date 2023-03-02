import React from 'react'
import { FormContainer, Container, Button } from '../styles/StyledComponents'
import { CustomInput } from '../common/CustomInput'
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KV-logo.svg/1200px-KV-logo.svg.png";

const Login = () => {
  return (
    <FormContainer
      from="login"
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <img src={logo} width={120} />
      </div>
      <CustomInput name="Email" />
      <CustomInput name="Password" />
      <Container content="row">
        <Button btn="cancel">Cancel</Button>
        <Button btn="submit">Submit</Button>
      </Container>
    </FormContainer>
  )
}

export default Login