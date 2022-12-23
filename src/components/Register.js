import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import bg from "../images/Background/bg2.jpg";

const Register = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: `url(${bg})` }}>
      <div style={{ border: "1px solid gray", padding: "2%", width: "80%", borderRadius: "1rem", boxShadow: "1px 2px 9px gray", backgroundColor: "white", opacity: "95%" }}>
        <h4 style={{ textAlign: "center" }}>HALAMAN REGISTRASI</h4>
        <Form style={{ marginTop: "4rem" }}>
          <Row className="mb-3" style={{}}>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1" style={{}}>
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control placeholder="Masukkan Nama Lengkap" />
          </Form.Group>

          <fieldset>
            <Form.Group className="mb-3" style={{}}>
              <Form.Label as="legend" style={{ fontSize: 16 }}>
                Jenis Kelamin
              </Form.Label>
              <Col sm={10} style={{ display: "flex" }}>
                <Form.Check type="radio" label="Laki-Laki" name="formHorizontalRadios" id="formHorizontalRadios1" />
                <Form.Check type="radio" label=" Perempuan" name="formHorizontalRadios" id="formHorizontalRadios2" style={{ marginLeft: "2rem" }} />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group className="mb-3" controlId="formGridAddress2" style={{}}>
            <Form.Label>Alamat</Form.Label>
            <Form.Control placeholder="Masukan Alamat" />
          </Form.Group>

          <Row className="mb-3" style={{}}>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Tanggal Lahir </Form.Label>
              <Form.Control placeholder="Tanggal Lahir" type="date" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>No. Telephone</Form.Label>
              <Form.Control placeholder="No.telephone" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Pembeli</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox" style={{}}>
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" href="/" type="submit " style={{}}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
