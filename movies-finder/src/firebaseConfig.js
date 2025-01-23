import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAQ7N0R5eS3B0x087IV0hGb9nYbwZXjEAA',
  authDomain: 'movies-finder-48c99.firebaseapp.com',
  projectId: 'movies-finder-48c99',
  storageBucket: 'movies-finder-48c99.firebasestorage.app',
  messagingSenderId: '1063739931707',
  appId: '1:1063739931707:web:62d745aa59ea338755301e',
  measurementId: 'G-H7WLBCLELN'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
