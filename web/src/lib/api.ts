import axios, { AxiosInstance } from 'axios';

let tokenProvider: (() => Promise<string | null>) | null = null;

export const setAuthTokenProvider = (provider: () => Promise<string | null>) => {
  tokenProvider = provider;
};

export const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  if (!config.headers) {
    config.headers = {};
  }

  const token = await tokenProvider?.();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
