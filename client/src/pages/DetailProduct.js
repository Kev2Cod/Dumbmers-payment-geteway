import React, { useEffect, useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import { API } from "../config/api";

const DetailProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  // console.log(id)

  const [product, setProduct] = useState([]);

  // let {data: products, refetch} = useQuery('categoriesCache', async() => {
  //   const response = await API.get(`/product/${id}`)
  //   console.log(response)
  // })

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get(`/product/${id}`);
      setProduct(response.data.data);
    };
    fetchData();
  }, []);

  // console.log("Product : ",product)

  // Format Currency
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  // Create config Snap payment with useEffect, untuk menampilkan modal pembayaran
  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-X3GsqPW5RR2N2-UD";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const handleBuy = async () => {
    try {
      // Get data from product
      const data = {
        idProduct: product.id,
        idSeller: product.seller.id,
        price: product.price,
      };

      const body = JSON.stringify(data);

      // Configuration
      const config = {
        headers: {
          Authorization: "Basic " + localStorage.token,
          "Content-type": "application/json",
        },
      };

      // Insert transaction data
      const response = await API.post("/transaction", body, config);
      console.log("Response Transaction: ", response.data.payment.token);

      // Create variabel for store token payment from response
      const token = response.data.payment.token;

      // Modify handle buy to display Snap payment page
      // //? dokumentasi midtrans
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          // navigate("/profile");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          // navigate("/profile");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
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

            <button onClick={handleBuy} className="btn bg-var-red text-white fw-bold container mb-lg-0 mb-5">
              Buy
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailProduct;
