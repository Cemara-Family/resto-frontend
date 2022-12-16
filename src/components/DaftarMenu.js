import React from "react";
import bg from "../images/Background/bg7.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mie from "../images/mieayam.jpg";
import bakso from "../images/bakso.jpeg";
import mb from "../images/mieayambakso.jpg";
import ab from "../images/ayambakar.jpg";
import lb from "../images/lele.jpg";
import ng from "../images/nasgor.jpg";
import np from "../images/nasi.jpeg";
import ej from "../images/esjeruk.jpg";
import jm from "../images/jusmangga.jpg";
import ja from "../images/juspukat.jpg";
import to from "../images/tehobeng.jpg";
import sf from "../images/sanford.jpg";
import babu from "../images/babu.jpg";
import Header from "./Header";

const DaftarMenu = () => {
  return (
    // judul
    <div>
      <div>
        {/* <Image src={bg} style={{ display: "relative", width: "100vw", height: "50vh ", objectFit: "cover" }}></Image> */}
        <Header />
      </div>
      <div style={{ marginTop: " 3rem", display: "flex", justifyContent: "center" }}>
        {/* <Image src={babu} /> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={mie} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Mie Ayam</Card.Title>
            <Card.Text>Rp.15.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={bakso} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Bakso</Card.Title>
            <Card.Text>Rp.12.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={mb} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Mie Ayam bakso</Card.Title>
            <Card.Text>Rp.20.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={ab} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title> Ayam bakar</Card.Title>
            <Card.Text>Rp.20.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div style={{ marginTop: " 2rem", display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={lb} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Lele Bakar</Card.Title>
            <Card.Text>Rp.13.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={ng} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Nasi Goreng</Card.Title>
            <Card.Text>Rp.12.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={np} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Nasi Putih</Card.Title>
            <Card.Text>Rp.5.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={ej} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Es Jeruk</Card.Title>
            <Card.Text>Rp.7.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div style={{ marginTop: " 2rem", display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={jm} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Jus mangga</Card.Title>
            <Card.Text>Rp.10.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={ja} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Jus Alpukat</Card.Title>
            <Card.Text>Rp.10.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={to} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Es teh</Card.Title>
            <Card.Text>Rp.5.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginLeft: "2rem" }}>
          <Card.Img variant="top" src={sf} />
          <Card.Body style={{ textAlign: "Center" }}>
            <Card.Title>Air Mineral</Card.Title>
            <Card.Text>Rp.5.000</Card.Text>
            <Button variant="primary" style={{ width: "10rem" }}>
              BELI
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DaftarMenu;
