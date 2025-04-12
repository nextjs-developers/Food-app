import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../lib/token";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const { response: refreshResponse } = await getNewTokens();

      if (refreshResponse?.status === 200) {
        const { accessToken, refreshToken } = refreshResponse.data.data;

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } else {
        setAccessToken("");
        setRefreshToken("");
      }
    }

    return Promise.reject(error?.response?.data || error);
  }
);

export default api;

const getNewTokens = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return {};

  try {
    const response = await axios.post(
      `${process.env.BASE_URL}auth/refresh-token`,
      { refreshToken },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return { response };
  } catch (error) {
    return { error };
  }
};
