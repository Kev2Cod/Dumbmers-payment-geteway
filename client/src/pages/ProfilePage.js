import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../assets/img/profile1.png";
import HistoryTransaction from "../components/HistoryTransaction";
import user from '../components/DataDummy/Users'

const ProfilePage = () => {

  return (
    <div className="container mt-3">
      <Container className='mt-2'>
        <Row className="text-sm-center text-lg-start">
          <Col className="col-sm-12 col-md-12 col-lg-4">
            <h5 className="text-var-red mb-4">My Profile</h5>
            <img src={Image} alt="Profile" />
          </Col>
          <Col className="col-sm-12 col-md-12 col-lg-3 mt-5">
            <div className="mb-3">
              <span className="text-var-red fw-bold">Name</span>
              <p>Kevin</p>
            </div>
            <div className="mb-3">
              <span className="text-var-red fw-bold">Email</span>
              <p>Kevin@mail.com</p>
            </div>
            <div className="mb-3">
              <span className="text-var-red fw-bold">Phone</span>
              <p>+628237437847</p>
            </div>
            <div className="mb-3">
              <span className="text-var-red fw-bold">Gender</span>
              <p>Male</p>
            </div>
            <div className="mb-3">
              <span className="text-var-red fw-bold">Address</span>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            </div>
          </Col>
          <Col className="col-sm-12 col-md-12 col-lg-5 mb-sm-5 mb-lg-0">
            <h5 className="text-var-red mb-4">My Transaction</h5>
            <HistoryTransaction />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
