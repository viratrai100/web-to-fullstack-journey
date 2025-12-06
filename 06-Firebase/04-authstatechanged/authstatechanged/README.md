## React + Firebase: Auth State Change

Track user auth state with Firebase and render UI accordingly.

### 🚀 How to Run
```bash
cd 06-Firebase/04-authstatechanged/authstatechanged
npm install
npm run dev
# build & preview
npm run build
npm run preview
```

### 📝 Author

```
Name     : Virat Rai
Email    : viratrai255075@gmail.com
LinkedIn : https://www.linkedin.com/in/viratrai100
GitHub   : https://github.com/viratrai100
```

---

## 🎯 Summary & Purpose
Listen to Firebase auth state and show different routes/UI.

### 📘 What I Learned
- `onAuthStateChanged` usage
- Guarding routes based on auth state
- Cleanup listeners

### 🧰 Technology Used
- React, Vite
- Firebase Authentication

### 🔧 How to Run From Scratch
```bash
npm create vite@latest authstatechanged -- --template react
cd authstatechanged
npm install firebase
# add src/firebase.js and listener in App.jsx
npm run dev
```