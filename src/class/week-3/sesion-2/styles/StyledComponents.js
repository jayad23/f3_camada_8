import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid ${({ from }) => from === "login" ? "#3795BD" : "orange"};
  ${({ from }) => from === "register" && css`
    width: 220px;
    height: 310px;
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
`;