import checkUser from "../utils/checkUser";

const handleLogin = async () => {
  const user = await checkUser();

  if (user) {
    console.log(user);
    console.log(user.email);
    console.log(user.name);
  } else {
    console.log("NO USER");
    console.log(user);
    console.log(user.email);
    console.log(user.name);
  }
};

export default handleLogin;