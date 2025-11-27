## Next.js App Router Demo

Intro project using the App Router (`app` directory) with simple pages and layouts.

### 🚀 How to Run
```bash
cd 04-Next-App/01-Intro/app-demo
npm install
npm run dev
# build & start
npm run build
npm start
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
Understand the App Router basics: layouts, nested routes, and loading states.

### 📘 What I Learned
- File‑based routing in the `app` directory
- Shared layouts and nested segments
- Loading and error UI

### 🧰 Technology Used
- Next.js (App Router)
- React, React DOM
 
### 🔧 How to Run From Scratch
```bash
npm init -y
npm install next react react-dom
# add scripts: dev/build/start
mkdir -p app
echo "export default function Page(){return 'Home'}" > app/page.tsx
npm run dev
```