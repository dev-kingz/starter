import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  timeout: 1000,
});
