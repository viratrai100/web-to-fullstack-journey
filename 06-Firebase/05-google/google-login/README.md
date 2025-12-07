## React + Firebase Auth: Google Login

Use Google provider with Firebase Authentication in a Vite + React app.

### 🚀 How to Run
```bash
cd 06-Firebase/05-google/google-login
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
Authenticate users with Google using Firebase Auth provider.

### 📘 What I Learned
- Configuring Google provider
- Popup vs redirect flows
- Handling user profile info

### 🧰 Technology Used
- React, Vite
- Firebase Authentication

### 🔧 How to Run From Scratch
```bash
npm create vite@latest google-login -- --template react
cd google-login
npm install firebase
# add GoogleAuthProvider and signInWithPopup
npm run dev
```