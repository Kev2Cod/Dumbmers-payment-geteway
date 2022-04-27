import React from "react";
import { products } from "../components/DataDummy/Products";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const params = useParams();
  const index = params.id - 1

  return (
    <div className="container">
      <form className="mt-3">
        <h5 className="text-start mb-4">Edit Product</h5>
        <div class="mb-3">
          <input class="form-control bg-transparent text-white border-0" type="file" />
        </div>
        <div className="input-group mb-3">
          <input type="text" placeholder="Nama Product" className="form-control bg-var-dark text-white border-form" value={products[index].title} />
        </div>
        <div className="input-group mb-3">
            <textarea className="form-control bg-var-dark text-white border-form" placeholder="Description" name="" id="" rows="5">{products[index].description}</textarea>
        </div>

        <div className="input-group mb-3">
          <input type="text" placeholder="Price" className="form-control bg-var-dark text-white border-form" value={products[index].price} />
        </div>
        <div className="input-group mb-3">
          <input type="text" placeholder="Stock" className="form-control bg-var-dark text-white border-form" value={products[index].stock}/>
        </div>

        <button className="btn bg-var-green text-white fw-bold container mt-3">Save</button>
      </form>
    </div>
  );
};

export default EditProduct;
