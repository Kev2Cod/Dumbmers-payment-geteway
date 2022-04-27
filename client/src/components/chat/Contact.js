import React from "react";
import Image from "../../assets/img/profile-admin-circle-icon.png";
import Image1 from "../../assets/img/profile1-circle-icon.png";
import Image2 from "../../assets/img/profile2-circle-icon.png";

const Contact = () => {
  return (
    <>
      <div className="mt-5">
        <button className="container bg-transparent border-0 d-flex align-items-center mb-3">
          <img className="rounded-circle icon-profile-circle" src={Image} alt="Profile" />
          <div className="ms-3 text-start">
            <span className="d-block fw-bold">Admin</span>
            <span className="d-block text-small text-var-gray">Ok, Is there anyting I can help ?</span>
          </div>
        </button>

        <button className="container bg-transparent border-0 d-flex align-items-center mb-3">
          <img className="rounded-circle icon-profile-circle" src={Image1} alt="Profile" />
          <div className="ms-3 text-start">
            <span className="d-block fw-bold">Alex_d1</span>
            <span className="d-block text-small text-var-gray">I'll give you discount😘</span>
          </div>
        </button>

        <button className="container bg-transparent border-0 d-flex align-items-center mb-3">
          <img className="rounded-circle icon-profile-circle" src={Image2} alt="Profile" />
          <div className="ms-3 text-start">
            <span className="d-block fw-bold">Mark_7s</span>
            <span className="d-block text-small text-var-gray">Sorry the Mouse is out of stock</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default Contact;
