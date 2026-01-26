import axiosInstance from "../axios";

export const userLogin = (email, password) => {
  return axiosInstance.post(
    "https://scampulse-backend.vercel.app/api/auth/Login/login",
    {
      email,
      password,
    },
  );
};
