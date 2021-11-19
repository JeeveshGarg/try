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
const realtimeDB = firebase.database()


const getAllflowers = async(setFlowers) =>{
    try {

        const dbRef = realtimeDB.ref();
        await dbRef.child('Flowers').get().then((snapshot)=>{
            if(snapshot.exists()){
                console.log(snapshot.val())
                setFlowers(Object.keys(snapshot.val()).map(key=>(snapshot.val()[key])))
            }
            else{
                console.log("cannot get flowers")
            }
        })

    } catch (error) {
        console.log("flowers error",error)
    }
}

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
export {addUserToDB,firebase,getAllflowers};
