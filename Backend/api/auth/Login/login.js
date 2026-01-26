import { auth, signInWithEmailAndPassword } from "../../../config/firebase";
import { setUser } from "../../../utils/sessionStore";

async function userLogin(req , res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "https://scampulse.vercel.app");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed.This is API Key" });
  }
  const { email , password } = req.body;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    setUser(user)
    return res.status(200).json({ success: true, user: user })
  } catch (error) {
    console.error(error.message)
    return res.status(400).json({ success: false })
  }
}

export default userLogin;