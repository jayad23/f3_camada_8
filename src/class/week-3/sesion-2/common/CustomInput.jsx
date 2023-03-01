import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/StyledComponents'
export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  outline: none;
`

export const CustomInput = ({ name }) => {
  return (
    <Container>
      <span>{name}:</span>
      <Input type={name.includes("Password") ? "password" : "text"} placeholder={`Enter your ${name}`} />
    </Container>
  )
};