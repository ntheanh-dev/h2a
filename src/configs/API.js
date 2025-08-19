import axios from "axios";
import { notify } from "../utils/notify";

const baseURL = import.meta?.env?.VITE_API_BASE_URL || "http://localhost:8080/api";
const defaultTimeoutMs = Number(import.meta?.env?.VITE_API_TIMEOUT_MS) || 30000;

export const api = axios.create({
  baseURL,
  timeout: defaultTimeoutMs,
});

// Optional: attach auth header if using tokens later
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// Global response error handling (timeout alert)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const isTimeout = error?.code === "ECONNABORTED" || /timeout/i.test(error?.message || "");
    if (isTimeout) {
      const message = "Yêu cầu quá thời gian (timeout). Vui lòng kiểm tra kết nối và thử lại.";
      notify(message, "error");
    }
    return Promise.reject(error);
  }
);
