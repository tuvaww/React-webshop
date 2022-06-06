import { useEffect, useState } from "react";
import { IProducts } from "../../models/IAPI";
import { getApi } from "../../ts/main-ts";

export const DisplayProducts = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const firstFiftieProducts = products.splice(0, 10);

  useEffect(() => {
    getProducts();
  }, [products]);

  async function getProducts() {
    const response = await getApi();
    setProducts(response);
  }

  let productsHTML = firstFiftieProducts.map((product) => {
    return (
      <article className="productWrapper" key={product.id}>
        <div className="productImgContainer">
          <img src={product.image_link} alt="" />
        </div>

        <div className="fastInfoContainer">
          <p className="productName">{product.name}</p>
          <p className="productPrice">{product.price}</p>
          <button className="fastToCartButton">Add to cart</button>
        </div>
      </article>
    );
  });

  return <section className="productsContainer">{productsHTML}</section>;
};
