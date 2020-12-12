import firebase from "firebase/app";

const convertDateToTimestamp = (date) => {
  return firebase.firestore.Timestamp.fromDate(date);
};

export default convertDateToTimestamp;
