## Next.js App Router: Routing

Practice nested routes, segments, and layouts using the App Router.

### 🚀 How to Run
```bash
cd 04-Next-App/02-Router/app-router
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
Build nested routes with shared layouts and pages in the App Router.

### 📘 What I Learned
- Layouts per route segment
- Nested routes and linking
- Server vs client components

### 🧰 Technology Used
- Next.js (App Router)
- React, React DOM

### 🔧 How to Run From Scratch
```bash
npm init -y
npm install next react react-dom
# add scripts
mkdir -p app/dashboard
echo "export default function Page(){return 'Home'}" > app/page.tsx
npm run dev
```