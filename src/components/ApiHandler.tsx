import axios from "axios";
import { useEffect, useState } from "react";

interface IProducts {
  image_link: string;
  brand: string;
  description: string;
  id: number;
  name: string;
  product_type: string;
  price: string;
}

//https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
export const ApiHandler = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  /*  useEffect(() => {
    axios
      .get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
  }, []); */

  /*   let productsHTML = products.map((product) => {
    return (
      <article key={product.id}>
        <div className="product-img-container">
          <img src={product.image_link} alt={product.name} />
        </div>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </article>
    );
  }); */

  return <div></div>;
};
