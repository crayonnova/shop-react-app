import firebase from 'firebase'
import dotenv from 'dotenv';
dotenv.config();

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

 firebase.initializeApp(config); //config
 
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();
 
 export const createUserProfileDocument = async(userAuth , additionalData) => {
   
   console.count('createUserProfileDocument')

   if(!userAuth) return ;

   const userRef = firestore.doc(`users/${userAuth.uid}`); //request data
  //  console.log(userRef);

   const snapShot = await userRef.get();
  // console.log(snapShot)

   if(!snapShot.exists){
 
    console.log('snapShopt does');
     let {displayName, email} = userAuth;

     
     const createdAt = new Date();
     console.log('Final display name is :',displayName);
     try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
     }catch(error){
        console.log('some error'.error)
     }
   }

   return userRef;
 }
 
 const provider = new firebase.auth.GoogleAuthProvider();

 provider.setCustomParameters({ prompt : 'select_account' });

 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;


