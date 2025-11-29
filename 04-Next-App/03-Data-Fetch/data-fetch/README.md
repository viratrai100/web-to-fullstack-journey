## Next.js App Router: Data Fetching

Demo of server components and data fetching in the App Router.

### 🚀 How to Run
```bash
cd 04-Next-App/03-Data-Fetch/data-fetch
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
Fetch data in server components and stream UI updates.

### 📘 What I Learned
- Server vs client components
- Fetching data in server components
- Passing data to client components

### 🧰 Technology Used
- Next.js (App Router)
- React, React DOM

### 🔧 How to Run From Scratch
```bash
npm init -y
npm install next react react-dom
# add scripts
mkdir -p app
echo "export default async function Page(){return 'Data'}" > app/page.tsx
npm run dev
```