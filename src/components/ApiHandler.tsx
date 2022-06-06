import axios from "axios";
import { useEffect, useState } from "react";
import { IProducts } from "../models/IAPI";

interface IApiHandlerProps {
  getProducts(p: IProducts[]): void;
}

export const ApiHandler = (props: IApiHandlerProps) => {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    axios
      .get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx")
      .then((response) => {
        //console.log(response.data);
        setProducts(response.data);
        props.getProducts(response.data);
      });
  }, []);

  return <></>;
};
