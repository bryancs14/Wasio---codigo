import axios from "axios";
import { URL_BACKEND } from "../environments/environment";

export const getProductos = async () => {
  const rpta = await axios.get(URL_BACKEND + "/producto");
  return rpta;
};

export const postProducto = async (objProducto) => {
  const rpta = await axios.post(
    URL_BACKEND + "/producto",
    {...objProducto},
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  );
  return rpta;
}

export const getProductoById = async (id_producto) => {
  const rpta = await axios.get(URL_BACKEND + "/producto/"+id_producto);
  return rpta;
} 

// export const postUploadImagenByProductoId = async (file, producto_id) => {
//   let miFormData = new FormData();
//   miFormData.append("imagen", file);
//   miFormData.append("producto_id", plato_id);

//   const rpta = await axios.post(
//       `${URL_BACKEND}/plato/imagen/upload`,
//       miFormData,
//       {
//           headers: {
//               "Content-type": "multipart/form-data"
//           }
//       }
//   )
//   return rpta;
// }

export const deleteProductoById = async (id_producto) => {
  const rpta = await axios.delete(
    URL_BACKEND + "/producto/"+ id_producto,
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  )
  return rpta;
}

export const putProductoById = async ({objProducto}) => {
  const rpta = await axios.put(
    URL_BACKEND + "/producto/"+ objProducto.id,
    {...objProducto},
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  )
  return rpta;
}