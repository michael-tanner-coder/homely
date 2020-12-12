import { auth } from "../firebase/config";

const logout = (e) => {
  e.preventDefault();
  auth.signOut();
};

export default logout;
