import Cookies from "js-cookie";

export const getAccessToken = () => {
  return Cookies.get("accessToken");
};
 
export const getRefreshToken = () => {
  return Cookies.get("refreshToken");
};

export const setAccessToken = (token) => {
  Cookies.set("accessToken", token, { expires: 7 });
};

export const setRefreshToken = (token) => {
  Cookies.set("refreshToken", token, { expires: 30 });
};

export const removeAccessToken = () => {
  Cookies.remove("accessToken");
};

export const removeRefreshToken = () => {
  Cookies.remove("refreshToken");
};