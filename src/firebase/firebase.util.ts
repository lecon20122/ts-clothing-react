import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: 'AIzaSyD9U3ZJyHIqH2-KyUh5MVBb4nhgOreRM_A',
    authDomain: 'clothing-10050.firebaseapp.com',
    projectId: 'clothing-10050',
    storageBucket: 'clothing-10050.appspot.com',
    messagingSenderId: '241928014394',
    appId: '1:241928014394:web:24ca26d7a6f766878dc303'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
