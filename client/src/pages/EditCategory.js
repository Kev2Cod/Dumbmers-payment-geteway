import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../components/DataDummy/Products";


const EditCategory = () => {
  const params = useParams()
  const index = params.id - 1

  const categoryProducts = products.reduce((acc, product) => {
    const categoryIndex = acc.findIndex((item) => item.name == product.category);
    if (categoryIndex > -1) {
      acc[categoryIndex].products.push(product);
    }else {
          acc.push({ name: product.category, products: [product] });
        }
    return acc;
  }, []);


  // console.log(categoryProducts[index])

  return (
    <div className="container">
      <h3 className="text-start mb-3 mt-5">Edit Category</h3>
      <form style={{marginTop: '3rem'}}>
        <div className="input-group mb-3">
          <input type="text" className="form-control bg-var-dark text-white border-form" value={categoryProducts[index].name}/>
        </div>
        <button className="btn bg-var-green text-white fw-bold container mt-5">Save</button>
      </form>
    </div>
  );
};

export default EditCategory;
