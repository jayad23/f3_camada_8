import React from 'react'
import { Container } from '../styles/StyledComponents'

const styles = {
  headers: {
    margin: 0,
    color: "#443C68"
  },
  user: {
    color: "#3F979B"
  },
  info: {
    color: "#443C68"
  }
}

const User = ({ name, email, password }) => {
  const nickName = name.includes(" ") ? name.split(" ")[0] : name;
  return (
    <Container>
      <h1 style={styles.headers}>Welcome back, <span style={styles.user}>{nickName}</span></h1>
      <p style={styles.info}>Remember some of your information:</p>
      <Container>
        <h3 style={styles.headers}>Full name: <span style={styles.user}>{name}</span></h3>
        <h3 style={styles.headers}>Email: <span style={styles.user}>{email}</span></h3>
        <h3 style={styles.headers}>Password: <span style={styles.user}>{password}</span></h3>
      </Container>
    </Container>
  )
}

export default User