import axios from "axios";
import { URL_BACKEND } from "../environments/environment";

export const getCategorias = async () => {
  const rpta = await axios.get(URL_BACKEND + "/categoria");
  return rpta;
};
