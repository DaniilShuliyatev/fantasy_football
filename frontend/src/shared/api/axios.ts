import axios from "axios";
import { API_BASE_URL, USER_AUTH_KEY } from "../consts";

export const $api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    authorization: localStorage.getItem(USER_AUTH_KEY),
    "Content-Type": "application/json",
  },
});
