import React from 'react'
import { CustomInput } from '../common/CustomInput'
import { FormContainer, Container, Button } from '../styles/StyledComponents'
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KV-logo.svg/1200px-KV-logo.svg.png";

const Register = () => {
  return (
    <FormContainer
      from="register"
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <img src={logo} width={120} />
      </div>
      <form>
        <CustomInput name="Name" />
        <CustomInput name="Email" />
        <CustomInput name="Password" />
        <CustomInput name="Repeat Password" />
      </form>
      <Container content="row">
        <Button btn="cancel">Cancel</Button>
        <Button btn="submit">Submit</Button>
      </Container>
    </FormContainer>
  )
}

export default Register