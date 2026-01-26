import { getUserApi } from "../api/user/user.api";

const checkUser = async () => {
  const res = await getUserApi();

  if(res.data?.user){
    console.log("USER FOUND")
    console.log(res.data?.user)
  }
};

export default checkUser;