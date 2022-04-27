import React from "react";

import { useNavigate } from "react-router-dom";
import ListProductComponent from "../components/List/ListProductComponent";
import { products } from "../components/DataDummy/Products";

const ListProduct = () => {
  

  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex">
      <h4>List Product</h4>
      <button className="btn bg-var-dark-gray text-white ms-auto px-5">Add</button>

      </div>
      <table className="table table-dark table-striped mt-3 ">
        <thead>
          <tr className="text-center">
            <th scope="col">No</th>
            <th scope="col">Photo</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Desc</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return <ListProductComponent key={index} number={index + 1} id={item.id} title={item.title} image={item.image} description={item.description} price={item.price} stock={item.stock} />
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
