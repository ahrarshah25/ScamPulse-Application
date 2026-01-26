import { auth, createUserWithEmailAndPassword, updateProfile } from "../../../config/firebase"

async function signupUser(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed.This is API Key" });
  }

  const { firstName, lastName, email, password } = req.body;

  const fullName = firstName + " " + lastName;

  try {
    await createUserWithEmailAndPassword(auth, email, password)
    const user = auth.currentUser
    await updateProfile(user, {
      displayName : fullName
    })
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error(error.message)
    return res.status(400).json({ success: false })
  }
}

export default signupUser;