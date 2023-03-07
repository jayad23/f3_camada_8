import React, { useState } from 'react'
import { FormContainer, Container, Button } from '../styles/StyledComponents'
import { CustomInput } from '../common/CustomInput'
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KV-logo.svg/1200px-KV-logo.svg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <FormContainer
      from="login"
    >
      <form id="login-form" onSubmit={handleSubmit}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={logo} width={120} />
        </div>
        <CustomInput name="Email" value={email} setChange={setEmail} />
        <CustomInput name="Password" value={password} setChange={setPassword} />
      </form>
      <Container content="row">
        <Button btn="cancel">Cancel</Button>
        <Button form="login-form" btn="submit">Submit</Button>
      </Container>
    </FormContainer>
  )
}

export default Login