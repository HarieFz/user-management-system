import axios from "axios";
import Auth from "../../lib/auth";
import { BASE_API_URL } from "../../constants";

const client = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use((config) => {
  const token = Auth.getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;

    if (status === 401) {
      Auth.clearAccessToken();
    }

    return Promise.reject(error);
  }
);

export default client;
