import axios from "axios"
import { URL_BACKEND } from "../environments/environment"


export const getMarcas = async () => {
  const rpta = await axios.get(URL_BACKEND + "/marca");
  return rpta;
}

export const getMarcaById = async (id_marca) => {
  const rpta = await axios.get(URL_BACKEND + "/marca/" + id_marca);
  return rpta;
}

export const postMarca = async (objMarca) => {
  const rpta = await axios.post(
    URL_BACKEND + "/marca",
    {...objMarca},
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  );
  return rpta;
}

export const deleteMarcaById = async (id_marca) => {
  const rpta = await axios.delete(
    URL_BACKEND + "/marca/"+ id_marca,
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  )
  return rpta;
}

export const putMarcaById = async (objMarca) => {
  const rpta = await axios.put(
    URL_BACKEND + "/marca/"+ objMarca.id,
    {...objMarca},
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  )
  return rpta;
}