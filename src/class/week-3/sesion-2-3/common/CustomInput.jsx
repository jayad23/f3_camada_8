import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/StyledComponents'
export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #4E6E81;
`
const REGEX = /^[a-z0-9]+$/i;
export const CustomInput = ({ name, onChange, error }) => {
  const reName = name.trim().toLowerCase().replaceAll(" ", "");
  //console.log(reName)
  return (
    <Container>
      <span>{name}:</span>
      <Input name={reName} onChange={onChange} type={name.includes("Password") ? "password" : "text"} placeholder={`Enter your ${name}`} />
      {
        error && error['displayError'] && (
          <span style={{ color: "crimson", fontSize: "10px", margin: "2px" }}>{error['displayError']}</span>
        )
      }
    </Container>
  )
};