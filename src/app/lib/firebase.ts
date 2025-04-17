import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
  apiKey: 'AIzaSyC88Z6TiFjlSXtOyhYUFYw5RmDduFTEhy8',
  authDomain: 'todolist-rendi.firebaseapp.com',
  projectId: 'todolist-rendi',
  storageBucket: 'todolist-rendi.firebasestorage.app',
  messagingSenderId: '828991747206',
  appId: '1:828991747206:web:98d20761a05f87150a4d07',
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
