import { FirebaseOptions, initializeApp } from 'firebase/app'

export const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyAnSu4hqbs6jFAzFrlhVAUm-0FNu0Sqcqc',
  authDomain: 'dulcet-palace-268221.firebaseapp.com',
  projectId: 'dulcet-palace-268221',
  storageBucket: 'dulcet-palace-268221.appspot.com',
  messagingSenderId: '360712073555',
  appId: '1:360712073555:web:5aa583f5d1618f917f71a6',
  measurementId: 'G-L04WMBW2BP'
}

export const firebase = initializeApp(firebaseConfig)

export default firebase
