import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRmxvvncREsMHMQDqXJkRFsGcp1Idcwys",
  authDomain: "app-c6389.firebaseapp.com",
  projectId: "app-c6389",
  storageBucket: "app-c6389.firebasestorage.app",
  messagingSenderId: "791873430134",
  appId: "1:791873430134:web:c09a9a56915636ab0e7557",
  databaseURL: "https://app-c6389-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);