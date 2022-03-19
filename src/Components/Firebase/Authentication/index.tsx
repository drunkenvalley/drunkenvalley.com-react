import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

import firebase from 'Components/Firebase'

const auth = getAuth(firebase)

const LoggedIn = (user: User): JSX.Element => (
  <div>
    Hello {user?.displayName}!
    <button onClick={() => auth.signOut()}>Sign out</button>
  </div>
)

const SignIn = (): JSX.Element => {
  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  return (
    <button onClick={SignInWithGoogle}>Log in with Google</button>
  )
}

const Login = (): JSX.Element => {
  const [user] = useAuthState(auth)

  return (
    user
      // Logged in
      ? <LoggedIn {...user} />

      // Not logged in
      : <SignIn />
  )
}

export default Login
