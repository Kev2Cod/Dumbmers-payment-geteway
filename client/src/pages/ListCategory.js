import React from "react";
import { useEffect } from "react";
import { products } from "../components/DataDummy/Products";

import ListCategoryComponent from "../components/List/ListCategoryComponent";

const Category = () => {
  
  // source:  https://stackoverflow.com/questions/70265468/best-way-to-group-an-array-with-property-of-object-and-how-to-render-the-result

  const categoryProducts = products.reduce((acc, product) => {
    const categoryIndex = acc.findIndex((item) => item.name === product.category);
    if (categoryIndex > -1) {
      acc[categoryIndex].products.push(product);
    } else {
      acc.push({ name: product.category, products: [product] });
    }
    return acc;
  }, []);


  return (
    <div className="container mt-4">
      <h4>List Category</h4>
      <table className="table table-dark table-striped mt-4">
        <thead>
          <tr className="text-center">
            <th scope="col">No</th>
            <th scope="col">Category Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {categoryProducts.map((item, index) => {
            return <ListCategoryComponent key={index} id={`${index + 1}`} title={item.name} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
