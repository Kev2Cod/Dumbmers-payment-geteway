import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "react-query"
import { useParams } from "react-router-dom";

import { API } from "../config/api";


const DetailProduct = () => {

  const params = useParams()
  const { id } = params
  console.log(id)

  const [product, setProduct] = useState([]);
  
  // let {data: products, refetch} = useQuery('categoriesCache', async() => {
  //   const response = await API.get(`/product/${id}`)
  //   console.log(response)
  // })

    useEffect(() => {
    const fetchData = async () => {
      const response = await API.get(`/product/${id}`);
      setProduct(response.data.data)
    };
    fetchData()
  }, []);

  console.log(product)

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
          <img src={product.image} alt="image-product" className="container image-detail-product" />
        </Col>

        <Col xs={12} md={6} className="mt-lg-0 mt-5 px-lg-0 px-4 ">
          <h3 className="text-var-red">{product.name}</h3>
          <p>Stock : {product.qty}</p>
          <div className="description">
            <p className="text-justify mb-5">{product.desc} </p>

            <p className="text-var-red fw-bold fs-5 text-end mt-2">{formatter.format(product.price)}</p>
          </div>

          

          <Link to="/profile-page" className="btn bg-var-red text-white fw-bold container mb-lg-0 mb-5">Buy</Link>
        </Col>
        
      </Row>
    </Container>
  );
};

export default DetailProduct;
