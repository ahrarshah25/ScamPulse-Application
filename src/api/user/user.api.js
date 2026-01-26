import axiosInstance from "../axios";

export const getUserApi = async () => {
  const res = await axiosInstance.get(
    "https://scampulse-backend.vercel.app/api/user/check"
  );
  return res.data.user;
};
