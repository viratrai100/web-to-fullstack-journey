## Next.js App Router: Authentication

Authentication demo using the App Router with protected pages.

### 🚀 How to Run
```bash
cd 04-Next-App/05-Authentication/authentication
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
Implement login/logout and protect routes using the App Router.

### 📘 What I Learned
- Handling auth in server and client components
- Protecting routes and layouts
- Using an auth SDK/adapter

### 🧰 Technology Used
- Next.js (App Router)
- React, React DOM
- (Auth library as configured in project)

### 🔧 How to Run From Scratch
```bash
npm init -y
npm install next react react-dom
# add scripts
mkdir -p app
echo "export default function Page(){return 'Auth'}" > app/page.tsx
npm run dev
```