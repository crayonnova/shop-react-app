import firebase from 'firebase'
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env)
const config = {
  apiKey: 'AIzaSyBmZdhOSQFpckEi219UpEzn0G3bXKEznRA',
  authDomain: 'hyper-app-1557d.firebaseapp.com',
  databaseURL: 'https://hyper-app-1557d.firebaseio.com',
  projectId: 'hyper-app-1557d',
  storageBucket: 'hyper-app-1557d.appspot.com',
  messagingSenderId: '5026641576',
  appId: '1:50266415766:web:d27110e3a346a067a058b7',
  measurementId: 'G-VGXYFBXXCK'
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


