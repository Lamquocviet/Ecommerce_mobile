import axios, { AxiosInstance } from 'axios';

let tokenProvider: (() => Promise<string | null>) | null = null;

export const setAuthTokenProvider = (provider: () => Promise<string | null>) => {
  tokenProvider = provider;
};

export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  }
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
