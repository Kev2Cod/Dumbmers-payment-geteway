import { React, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { products } from "../components/DataDummy/Products";
import ProductCard from "../components/card/ProductCard";

const Home = () => {

  const title = "Home";
  document.title = "Dumbmers | " + title;

  const [selectCategory, setSelectCategory] = useState("");
  const [showProduct, setShowProduct] = useState([]);
  // const [showCategory, setShowCategory] = useState([])

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

  useEffect(() => {
    //  const filterCategory = products.filter(data => data.category === selectCategory)
    //  setShowProduct(filterCategory)

    if (selectCategory) {
      const filterProduct = products.filter((data) => data.category === selectCategory);
      setShowProduct(filterProduct);
    } else {
      setShowProduct(products);
    }
  }, [selectCategory, products]);

  const changeCategory = (e) => {
    const value = e.target.value;
    setSelectCategory(value);
    console.log(value);
  };

  return (
    <>
      <div className="container mb-lg-0 mb-5">
        <div className="d-flex align-items-center">
          <p className="text-var-red fw-bold mt-4 fs-4">Product</p>
          <Form.Select onChange={changeCategory} value={selectCategory} aria-label="Select" className="form-select-category bg-var-dark-gray text-white ms-auto">
            <option value="">All</option>
            {categoryProducts.map((data, index) => {
              return (
                <option key={index} value={data.name}>
                  {data.name}
                </option>
              );
            })}
          </Form.Select>
        </div>

        <div className="products d-flex flex-wrap gap-3 mt-4 justify-content-md-start justify-content-center ">
          {showProduct.map((item, index) => {
            return <ProductCard key={index} id={index} image={item.image} title={item.title} price={item.price} stock={item.stock} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
