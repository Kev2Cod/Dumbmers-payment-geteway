import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { products } from "../components/DataDummy/Products";
import { useParams } from "react-router-dom";

const DetailProduct = () => {

  const params = useParams();
  const index = params.id;

  // Format Currency
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });
  

  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img src={products[index].image} alt="image-product" className="container image-detail-product" />
        </Col>

        <Col xs={12} md={6} className="mt-lg-0 mt-5 px-lg-0 px-4 ">
          <h3 className="text-var-red">{products[index].title}</h3>
          <p>Stock : {products[index].stock}</p>
          <div className="description">
            <p className="text-justify mb-5">{products[index].description} </p>

            <p className="text-var-red fw-bold fs-5 text-end mt-2">{formatter.format(products[index].price)}</p>
          </div>

          

          <Link to="/profile-page" className="btn bg-var-red text-white fw-bold container mb-lg-0 mb-5">Buy</Link>
        </Col>
        
      </Row>
    </Container>
  );
};

export default DetailProduct;
