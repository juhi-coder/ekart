import React from "react";
import { Button, Container } from "react-bootstrap";
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const ProductList = () => {
  return (
    <>
      <Container>
        <h2>Products</h2>
        <ul>
          {productsArr.map((product, index) => (
            <li key={index}>
              <img src={product.imageUrl} alt={product.title} />
              <h3>item -{product.title}</h3>
              <p>${product.price}</p>
              <Button variant="primary">Add to Cart</Button>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default ProductList;