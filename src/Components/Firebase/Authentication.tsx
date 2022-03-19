import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

import GoogleGLogo from 'GoogleGLogo.svg'

import firebase from 'Config/Firebase'

const auth = getAuth(firebase)

const AuthLogo = (): JSX.Element => <object className='ms-1' data={GoogleGLogo} />

const SignOut = (user: User): JSX.Element => (
  <div>
    Hello {user?.displayName}!
    <button className='btn btn-large btn-outline-danger d-flex flex-row align-items-center' onClick={() => auth.signOut()}>
      Sign out
      <AuthLogo />
    </button>
  </div>
)

const SignIn = (): JSX.Element => {
  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  return (
    <button className='btn btn-large btn-outline-primary d-flex flex-row align-items-center' onClick={SignInWithGoogle}>
      Sign in
      <AuthLogo />
    </button>
  )
}

const Login = (): JSX.Element => {
  const [user] = useAuthState(auth)

  return (
    user
      // Logged in
      ? <SignOut {...user} />

      // Not logged in
      : <SignIn />
  )
}

export default Login
