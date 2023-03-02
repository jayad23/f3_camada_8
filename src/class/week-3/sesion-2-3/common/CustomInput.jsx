import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/StyledComponents'
export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #4E6E81;
`
export const CustomInput = ({ name, onChange }) => {
  const reName = name.trim().toLowerCase().replaceAll(" ", "");
  return (
    <Container from="login">
      <span>{name}:</span>
      <Input name={reName} onChange={onChange} type={name.includes("Password") ? "password" : "text"} placeholder={`Enter your ${name}`} />
    </Container>
  )
};