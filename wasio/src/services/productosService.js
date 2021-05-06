import axios from "axios";
import { URL_BACKEND } from "../environments/environment";

export const getProductos = async () => {
  const rpta = await axios.get(URL_BACKEND + "/producto");
  return rpta;
};

export const getProductoById = async(id) => {
  const rpta = await axios.get(URL_BACKEND + "/producto/" + id);
  return rpta;
};

export const getProductosBytag = async(tag) => {
  const rpta = await axios.get(URL_BACKEND + "/producto?search=" + tag);
  return rpta;
}


export const getProductosByCategoria = async(idCategoria) =>
{
  const rpta = await axios.get(URL_BACKEND + "/producto?cat_id=" + idCategoria);
  return rpta;
}