import { auth } from "../config/firebase";

async function checkUser() {
    const currentUser = auth.currentUser;
    return currentUser;
}

export default checkUser;