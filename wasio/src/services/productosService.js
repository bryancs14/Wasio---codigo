import axios from "axios";
import { URL_BACKEND } from "../environments/environment";

export const getProductos = async () => {
  const rpta = await axios.get(URL_BACKEND + "/producto");
  return rpta;
};

export const getProductoById = async(id) => {
  const rpta = await axios.get(URL_BACKEND + "/producto/" + id);
  return rpta;
}


