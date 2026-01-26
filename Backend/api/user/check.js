import { auth } from "../../config/firebase"

export default async function check(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "https://scampulse.vercel.app");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  try {
    const user = auth.currentUser;
    
    return res.status(200).json({ success: true, user: user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}
