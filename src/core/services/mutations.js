import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../config/api";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("/api/auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("/api/auth/check-otp", data);

  // const onSuccess = (data) => {
  //   setCookie("accessToken", data?.data?.accessToken, 30);
  //   setCookie("refreshToken", data?.data?.refreshToken, 365);
  //   queryClient.invalidateQueries({ queryKey: ["user-data"] });
  // };

  return useMutation({ mutationFn });
};
export { useSendOtp, useCheckOtp };
