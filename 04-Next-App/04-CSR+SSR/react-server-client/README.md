## Next.js App Router: Server & Client Components

Practice mixing server and client components with interactions.

### 🚀 How to Run
```bash
cd 04-Next-App/04-CSR+SSR/react-server-client
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
Understand when to use server vs client components for performance and UX.

### 📘 What I Learned
- Creating server components by default
- Marking client components with `'use client'`
- Passing props and events across boundaries

### 🧰 Technology Used
- Next.js (App Router)
- React, React DOM

### 🔧 How to Run From Scratch
```bash
npm init -y
npm install next react react-dom
# add scripts
mkdir -p app
echo "export default function Page(){return 'Mix'}" > app/page.tsx
npm run dev
```