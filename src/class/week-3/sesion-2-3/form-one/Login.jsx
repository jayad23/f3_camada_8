import React, { useState } from 'react'
import { Layout } from '../Layout';
import { CustomInput } from '../common/CustomInput'
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KV-logo.svg/1200px-KV-logo.svg.png";

const Login = ({ handleValues, handleCancel }) => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValues(values);
  };

  const handleChange = (e) => {
    const key = e.target.name.toLowerCase();
    const value = e.target.value;
    setValues({ ...values, [key]: value });
  }

  return (
    <Layout from="login" handleCancel={handleCancel} >
      <form id="login" onSubmit={handleSubmit}>
        {
          ["Email", "Password"].map(field => (
            <CustomInput key={field} name={field} onChange={handleChange} />
          ))
        }
      </form>
    </Layout>
  )
}

export default Login