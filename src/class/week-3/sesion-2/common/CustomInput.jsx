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
      <Input type={name !== "Password" ? "text" : "password"} placeholder={`Enter your ${name}`} />
    </Container>
  )
};