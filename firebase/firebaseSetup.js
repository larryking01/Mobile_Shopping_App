import firebase from 'firebase'
import 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDz-tWsGLsIoLeQXTYl9j4bQ5viEeTG3Ts",
    authDomain: "jumia-clone-a1b44.firebaseapp.com",
    projectId: "jumia-clone-a1b44",
    storageBucket: "jumia-clone-a1b44.appspot.com",
    messagingSenderId: "628188174248",
    appId: "1:628188174248:web:611a25356d4bc79a62af9d"
};



// Initialize Firebase
try{
    firebase.initializeApp(firebaseConfig);
}
catch(err) {
    if(!/already exists/.test(err.message)) {
        console.log('firebase initialization error', err.stack)
    }
}
  
let projectFireStore = firebase.firestore()

export {
    projectFireStore
}

