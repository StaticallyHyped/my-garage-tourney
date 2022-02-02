import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCdP4Ncv4FtZP7D5lcoWmiouO71tKapzwE",
  authDomain: "my-garage-tourney.firebaseapp.com",
  projectId: "my-garage-tourney",
  storageBucket: "my-garage-tourney.appspot.com",
  messagingSenderId: "733007078604",
  appId: "1:733007078604:web:ccb2794e342a92b91f0e69",
  measurementId: "G-QBWM9X3S88",
};

/* API request should be ASYNC */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  /* user not authorized, exit */
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  /* remember to use await for async calls. The snapshot is just a view of the data,
    can't update the data with it. */
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  /* return the userRef because we'll probably have something useful to do with it. */
  return userRef;
};

firebase.initializeApp(config);

/**
 * instantiate the firebase data from the PLAYERS_DATA object instead of
 * manually creating the collection in the db
 * @param {*} collectionKey
 * @param {*} objectsToAdd
 * @returns
 */
export const addPlayersAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  //group all calls together into one big request
  const batch = firestore.batch();
  //in this collection, make new doc ref objects but create new key
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    //batch set the new doc ref from the obj
    batch.set(newDocRef, obj);
  });

  //fire off the batch request.
  return await batch.commit();
};

/**
 * convert object instead of the array we'll get back from Firebase
 * @param {*} collections snapshot object to convert
 */
export const convertCollectionsSnapshotToMap = (collections) => {
  //the converted object from the document object (doc)
  const transformedCollection = collections.docs.map((doc) => {
    //pull the title and items from the doc data
    const { title, items } = doc.data();

    //return an actual object from the map function
    return {
      //converts any object to a version that can translated to a url
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  //pass in initial object, goes into element. Players property equal to players collection, etc
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
