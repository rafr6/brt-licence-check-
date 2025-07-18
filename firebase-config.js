// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFEpmvsyOm3fmFQQd88CrKbAH944DpJbE",
  authDomain: "brt-licence.firebaseapp.com",
  databaseURL: "https://brt-licence-default-rtdb.firebaseio.com",
  projectId: "brt-licence",
  storageBucket: "brt-licence.firebasestorage.app",
  messagingSenderId: "502685118571",
  appId: "1:502685118571:web:9f727f6c090ceac59c412e",
  measurementId: "G-Q3K8JDS206"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get, child };
