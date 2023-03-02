import React, { useState } from 'react'
import { CustomInput } from '../common/CustomInput'
import { Layout } from '../Layout';

const Register = ({ handleValues, handleCancel }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    repeatpassword: ""
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValues(values);
  };

  return (
    <Layout from="register" handleCancel={handleCancel}>
      <form id="register" onSubmit={handleSubmit}>
        {
          ["Name", "Email", "Password", "Repeat Password"].map(field => (
            <CustomInput key={field} name={field} onChange={handleChange} />
          ))
        }
      </form>
    </Layout>
  )
}

export default Register