import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import bg from "../images/Background/bg2.jpg";

const Login = () => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: `url(${bg})` }}>
      <div style={{ border: "1px solid gray", padding: "3rem", width: "30%", borderRadius: "1rem", boxShadow: "1px 2px 9px gray", backgroundColor: "white" }}>
        <h4 style={{ textAlign: "center" }}>
          FORM LOGIN
          <hr />
        </h4>

        {/* <Form style={{ marginTop: "3rem" }}>
          <Form.Group className="mb-3">
            <Form.Label>Email :</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password :</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: "3rem" }}>
            <Button variant="primary" href="/" type="submit" style={{ width: "100%", marginRight: "2rem" }}>
              Submit
            </Button>

            <Button variant="danger" href="/Register" type="submit" style={{ width: "100%" }}>
              Register
            </Button>
          </div>
        </Form> */}

<Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%"}}>
          Log in
        </Button>
        Or <a href="/Register">register now!</a>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
};

export default Login;
