import React from 'react'
import "./sesion-1/styles/styles.css";
import { TitleStyles } from './sesion-1/styles/Styles'
import styles from "./sesion-1/styles/App.module.css";
import { ButtonWarning, Title } from './sesion-1/styles/StyledComponents';

const App = () => {
  return (
    <div>
      {
        ["red", "green", "yellow", "blue"].map((color, idx) => (
          <div
            key={color}
            style={{
              "--accent": color,
              "--custom-padding": `${idx * 10}px`
            }}
          >
            {color}
          </div>
        ))
      }
      <div style={TitleStyles}>Título del componente</div>
      <button className={styles.error}>Error</button>
      <button className={styles["success"]}>Success</button>
      <ButtonWarning>Peligro!</ButtonWarning>
      <Title>Hola!</Title>
    </div>
  )
}

export default App