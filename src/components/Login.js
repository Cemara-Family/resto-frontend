import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import bg from "../images/Background/bg2.jpg";

const Login = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: `url(${bg})` }}>
      <div style={{ border: "1px solid gray", padding: "3rem", width: "30%", borderRadius: "1rem", boxShadow: "1px 2px 9px gray", backgroundColor: "white" }}>
        <h4 style={{ textAlign: "center" }}>
          FORM LOGIN
          <hr />
        </h4>

        <Form style={{ marginTop: "3rem" }}>
          <Form.Group className="mb-3">
            <Form.Label>Email :</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password :</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: "3rem" }}>
            <Button variant="primary" href="/" type="submit" style={{ width: "100%", marginRight: "2rem" }}>
              Submit
            </Button>

            <Button variant="danger" href="/Register" type="submit" style={{ width: "100%" }}>
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
