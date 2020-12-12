import { auth } from "../firebase/config";

const login = (email, password) => {
  var errMsg = "";

  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      errMsg = null;
    })
    .catch((error) => {
      errMsg = error.message;
    });

  return errMsg;
};

export default login;
