import React from "react";
import { Card, Button } from "react-bootstrap";

import Image from "../assets/img/products-keyboard.png";
import Icon from "../assets/img/icon/icon-dumb-merch.png";

const HistoryTransaction = () => {
  return (
    <>
      <table className="bg-var-dark-gray d-flex rounded">
        <tbody className="container-fluid">
          <tr className="d-flex justify-content-between align-items-center pt-2 pb-2">
            <td className="d-flex ">
              <img src={Image} className="image-list-product pe-3" />
              <div>
                <span className="fw-bold text-var-red ">Keyboard</span>
                <small className="text-var-red d-block mb-3">Saturday, 14 Juli 2021</small>
                <span className=" d-inline-block">Sub Total : Rp. 700.000</span>
              </div>
            </td>
            <td className="pe-3">
              <img src={Icon} className="ms-auto" style={{ width: "70px" }} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default HistoryTransaction;
