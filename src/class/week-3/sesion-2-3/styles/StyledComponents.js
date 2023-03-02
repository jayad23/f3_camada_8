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

export const MenuButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  margin-bottom: 8px;
  padding-bottom: 5px;
  &:hover{
    color: #F55050;
  };
  ${({ from }) => from === "true" && css`
    color: #F55050;
    border-bottom: 1px solid #F55050;
  `}  
`;