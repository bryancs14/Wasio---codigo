import axios from "axios";
import { URL_BACKEND } from "../environments/environment";

export const getCategorias = async () => {
  const rpta = await axios.get(URL_BACKEND + "/categoria");
  return rpta;
};

export const getCategoriaById = async (id_categoria) => {
  const rpta = await axios.get(URL_BACKEND + "/categoria/" + id_categoria);
  return rpta;
}

export const postCategoria = async (objCategoria) => {
  const rpta = await axios.post(
    URL_BACKEND + "/categoria",
    {...objCategoria},
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  );
  return rpta;
}

export const deleteCategoriaById = async (id_categoria) => {
  const rpta = await axios.delete(
    URL_BACKEND + "/categoria/"+ id_categoria,
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  )
  return rpta;
}

export const putCategoriaById = async (objCategoria) => {
  const rpta = await axios.put(
    URL_BACKEND + "/categoria/"+ objCategoria.id,
    {...objCategoria},
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  )
  return rpta;
}