import axios from "axios";
import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from "../lib/token";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getAccessToken("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const orginialRequest = error.config;
    if (error.response.status === 401 && !orginialRequest._retry) {
      orginialRequest._retry = true;

      const res = await getNewTokens();
      if (res?.response?.status === 201) {
        setAccessToken("accessToken", res?.response?.data.accessToken, 30);
        setRefreshToken("refreshToken", res?.response?.data.refreshToken, 360);
        return api(orginialRequest);
      } else {
        setAccessToken("accessToken", "", 0);
        setRefreshToken("refreshToken", "", 0);
      }
    }
    return Promise.reject(error.response.data);
  }
);

export default api;

const getNewTokens = async () => {
  const refreshToken = getRefreshToken("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/refresh-token`,
      {
        refreshToken,
      }
    );
    return { response };
  } catch (error) {
    return { error };
  }
};
