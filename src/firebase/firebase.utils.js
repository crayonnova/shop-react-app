import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyClfiaUsbzgI-Dayoox73bIqQgHw48VG30",
  authDomain: "crwn-db-14051.firebaseapp.com",
  databaseURL: "https://crwn-db-14051.firebaseio.com",
  projectId: "crwn-db-14051",
  storageBucket: "crwn-db-14051.appspot.com",
  messagingSenderId: "842578396055",
  appId: "1:842578396055:web:224674fd3a7c1161913ad2",
  measurementId: "G-0XL5QVRL1K"
};

 firebase.initializeApp(config);
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();
 
 export const createUserProfileDocument = async(userAuth , additionalData) => {
   if(!userAuth) return ;
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();


   if(!snapShot.exists){
 

     const {displayName, email} = userAuth;
     
     const createdAt = new Date();

     try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
     }catch(error){
        console.log('some error'.error.message)
     }
   }

   return userRef;
 }
 
 const provider = new  firebase.auth.GoogleAuthProvider();

 provider.setCustomParameters({ prompt : 'select_account' });

 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;


