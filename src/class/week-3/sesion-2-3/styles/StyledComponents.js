import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid ${({ from }) => from === "login" ? "#3795BD" : "#4E6E81"};
  ${({ from }) => from === "register" && css`
    width: 350px;
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  ${({ content }) => content === "evenly" && css`
    border: 1px solid red;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    flex-direction: row;
  `}
  ${({ content }) => content === "row" && css`
    width: 100%;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 7px;
  background-color: ${({ btn }) => btn === "submit" ? "#BAD7E9" : "#F48484"};
  ${({ btn }) => btn === "submit" && css`
    color: #2B3467;
    &:hover{
      color: #eee;
      background-color: #2B3467;
    }
  `}
  ${({ btn }) => btn === "cancel" && css`
    color: white;
    &:hover{
      background-color: #F55050;
    }
  `}
  &:active{
    transform: scale(.9);
  }
`;