import React, { useState } from "react";
import Header from "./Header";
import "@fortawesome/fontawesome-free/css/all.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Pesanan = () => {
  // const count =() => {

  // }

  return (
    <div>
      <Header />
      <h4 style={{ marginTop: "2rem", textAlign: "center" }}>PESANAN ANDA</h4>
      <Dropdown style={{ marginLeft: "2rem" }}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          10
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">15</Dropdown.Item>
          <Dropdown.Item href="#/action-2">25</Dropdown.Item>
          <Dropdown.Item href="#/action-3">50</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="table-responsive" style={{ marginTop: "3rem" }}>
        <table className="table" style={{}}>
          <thead>
            <tr>
              <th>
                <div className="th-content">
                  <span className="th-text">No </span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <span className="th-text">Nama Pesanan</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <span className="th-text">Harga</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <span className="th-text">Jumlah</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <span className="th-text">SubHarga</span>
                </div>
              </th>
              <th>
                <div className="th-content">Opsi</div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>mie ayam</td>
              <td>Rp.12.000</td>
              <td>1</td>
              <td>Rp.12.000</td>
              <td>
                <button className="btn btn-sm btn-danger">
                  <em className="fas fa-trash"></em>
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="4">Total Belanja</td>
              <td>Rp. 500.000</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>

        <div style={{ marginTop: "2rem" }}>
          <Button variant="primary" style={{ marginLeft: "2rem", marginRight: " 2rem" }}>
            Lihat Menu
          </Button>
          <Button variant="success">Konfirmasi Pesanan </Button>
        </div>
      </div>
    </div>
  );

  // function Count{
  //   const
  // }
};

export default Pesanan;
