import axios from "axios";
import { useState } from "react";
import { IProducts } from "../models/IAPI";

export const getApi = async () => {
  const response = await axios
    .get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx")
    .then(async (response) => {
      return response.data;
    });
  return response;
};
