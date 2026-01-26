import axiosInstance from "../axios";

export const signupHandler = (email, password, firstName , lastName , confirmPassword) => {
  return axiosInstance.post(
    "https://scampulse-backend.vercel.app/api/auth/Signup/signup",
    {
      email,
      password,
      firstName,
      lastName,
      confirmPassword,
    },
  );
};
