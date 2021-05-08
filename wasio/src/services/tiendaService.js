import axios from "axios";
import { URL_BACKEND } from "../environments/environment";

export const getTienda = async () => {
  const rpta = await axios.get(URL_BACKEND + "/marca");
  return rpta;
};


export const getTiendaById = async(id) => {
  const rpta = await axios.get(URL_BACKEND + "/marca/" + id);
  return rpta;
};