import React from 'react'
import logo from './logo.svg'
import './App.css'

import { Editor } from './Editor'

import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyAnSu4hqbs6jFAzFrlhVAUm-0FNu0Sqcqc',
  authDomain: 'dulcet-palace-268221.firebaseapp.com',
  projectId: 'dulcet-palace-268221',
  storageBucket: 'dulcet-palace-268221.appspot.com',
  messagingSenderId: '360712073555',
  appId: '1:360712073555:web:5aa583f5d1618f917f71a6',
  measurementId: 'G-L04WMBW2BP'
}

const firebase = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebase)

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Editor />
    </div>
  )
}

export default App
