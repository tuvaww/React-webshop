import axios from "axios";
import { IProducts } from "../models/IAPI";

export const getApi = () => {
  axios
    .get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx")
    .then((response) => {
      //console.log(response.data);
      return response.data;
    });
};
