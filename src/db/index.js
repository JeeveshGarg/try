import firebase from "firebase";
import { initializeApp } from 'firebase/app';


// const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
// const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
firebase.initializeApp({
    apiKey: "AIzaSyA-us6vtXTzjJb_RtlbBOwfLC_QDXytg6I",
    authDomain: "candid-connections.firebaseapp.com",
    databaseURL: "https://candid-connections-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "candid-connections",
    storageBucket: "candid-connections.appspot.com",
    messagingSenderId: "218584617634",
    appId: "1:218584617634:web:8ff7554f1568e91bca7dfb",
    measurementId: "G-HDFX7P9KV4"
});

const db = firebase.firestore()




 const addUserToDB = async ({fullName:FullName,age,user})=>{
    try{
        await db.collection('users').doc(user.uid).set({
            email:user.email,
            FullName,
            age,
            created_at:new Date()
        })
        }
        catch(error) {
            console.log(error)
        }
    
}
export {addUserToDB,firebase};
