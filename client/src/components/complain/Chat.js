import React from "react";
import "../../assets/static/css/complain.css";
import Image from "../../assets/img/profile-admin-circle-icon.png";
import PolygonLeft from "../../assets/static/media/Polygon-left-icon.svg";
import PolygonRight from "../../assets/static/media/Polygon-right-icon.svg";

const Chat = () => {
  return (
    <div className=" d-flex flex-column h-100 ">
      <div className="mt-auto ">
          {/* Start Chat  */}
        <div className="d-flex justify-content-end align-items-center mb-2">
          <span className="chat-span btn bg-var-dark-gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ducimus!
          </span>
          <img className="polygon-icon" src={PolygonRight} style={{ right: "5px" }} />
        </div>

        <div className="d-flex justify-content-start align-items-center mb-2">
          <img className="icon-profile-circle" src={Image} alt="Profile" />
          <img className="polygon-icon" src={PolygonLeft} style={{ left: "5px" }} />
          <span className="chat-span btn bg-var-dark-gray-half" >Why?</span>
        </div>

        <div className="d-flex justify-content-end align-items-center mb-2">
          <span className="chat-span btn bg-var-dark-gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem iure natus molestias possimus incidunt assumenda temporibus ipsa eveniet voluptatibus.
          </span>
          <img className="polygon-icon" src={PolygonRight} style={{ right: "5px" }} />
        </div>

        <div className="d-flex justify-content-start align-items-center mb-2">
          <img className="icon-profile-circle" src={Image} alt="Profile" />
          <img className="polygon-icon" src={PolygonLeft} style={{ left: "5px" }} />
          <span className="chat-span btn bg-var-dark-gray-half" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolorem eius, nobis aliquid itaque deserunt molestias inventore doloribus necessitatibus sunt quod ullam. Corporis libero dolores iusto sapiente porro, provident pariatur.</span>
        </div>

        <div className="d-flex justify-content-end align-items-center mb-2">
          <span className="chat-span btn bg-var-dark-gray">
            Ok!
          </span>
          <img className="polygon-icon" src={PolygonRight} style={{ right: "5px" }} />
        </div>

        <div className="d-flex justify-content-start align-items-center mb-2">
          <img className="icon-profile-circle" src={Image} alt="Profile" />
          <img className="polygon-icon" src={PolygonLeft} style={{ left: "5px" }} />
          <span className="chat-span btn bg-var-dark-gray-half" >Ok, Is there anyting I can help ?</span>
        </div>



        {/* End Chat */}
      </div>
    </div>
  );
};

export default Chat;
