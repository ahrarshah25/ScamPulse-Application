import axiosInstance from "../axios";

export const subscribeEmail = (email) => {
  return axiosInstance.post(
    "https://scampulse-backend.vercel.app/api/subscribe/subscribe",
    {
      email,
    },
  );
};
