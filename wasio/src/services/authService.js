import axios from "axios";
import { URL_AUTH } from "../environments/environment";

export const postLogin = async (objLogin) => {
  const rpta = await axios.post(`${URL_AUTH}/login`, JSON.stringify(objLogin), {
    headers: {
      "Content-type": "application/json",
    },
  });
  return rpta;
};

export const postVerificar = async (token) => {
  const rpta = await axios.post(
    `${URL_AUTH}/verificar`, null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  return rpta;
};
