import { projectFirestore } from "../firebase/config";

const getCollectionOfUser = (collection, user, setState) => {
  var temp_array = [];

  projectFirestore
    .collection(collection)
    .where("uid", "==", user)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        temp_array = [...temp_array, { ...doc.data(), id: doc.id }];
      });

      setState(temp_array);
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
};

export default getCollectionOfUser;
