import React, { useContext } from "react";
import "../assets/static/css/style.css";
import "../assets/static/css/complain.css";
import Contact from "../components/complain/Contact";
import Chat from "../components/complain/Chat";
import { Row, Col } from "react-bootstrap";
import { UserContext } from "../context/userContext";
import Navbar from "../components/Navbar";

const Complain = () => {
  const [state] = useContext(UserContext);
  console.log(state);

  return (
    <div className="container-fluid">
      <Navbar />
      <Row>
        <Col className="col-4 border-end-chat d-md-block d-none">
          <Contact />
        </Col>

        <Col className="col-md-8 col-12 d-flex align-items-end height-90">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 mb-3 d-flex align-items-end ">
                <div className="container-fluid container-chat overflow-auto ">
                  <Chat />
                </div>
              </div>
              <div className="col-12">
                <form action="#" className="">
                  <div className="input-group ">
                    <input type="text" placeholder="Send Message" aria-describedby="button-addon2" className="form-control rounded border-0 py-2 bg-var-dark-gray text-light mb-3" />
                  </div>
                </form>
                {/* </div> */}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Complain;
