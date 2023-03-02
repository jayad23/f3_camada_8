import React from 'react'
import { Button, Container, FormContainer, MenuButton } from './styles/StyledComponents'
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KV-logo.svg/1200px-KV-logo.svg.png";

export const Layout = ({ children, from, handleCancel }) => {
  return (
    <Container>
      <Container content="row">
        <MenuButton from={from === "register" ? "true" : "false"} onClick={() => handleCancel("register")}>Register</MenuButton>
        <MenuButton from={from === "login" ? "true" : "false"} onClick={() => handleCancel("login")}>Login</MenuButton>
      </Container>
      <FormContainer
        from={from}
      >
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={logo} width={120} />
        </div>
        {children}
        <Container content="row">
          <Button onClick={() => handleCancel(from === "login" ? "register" : "")} btn="cancel" type='button'>Cancel</Button>
          <Button btn="submit" form={from} type="submit">Submit</Button>
        </Container>
      </FormContainer>
    </Container>
  )
};