import axios from "axios";
import { tokenService } from "../utils/token";

const http = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || "http://localhost:4000",
});

http.interceptors.request.use((config) => {
  const token = tokenService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default http;
