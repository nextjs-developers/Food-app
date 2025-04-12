import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../config/api";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("api/auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("api/auth/check-otp", data);


  return useMutation({ mutationFn });
};
export { useSendOtp, useCheckOtp };
