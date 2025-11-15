## Next.js Dynamic Routing

Practice dynamic routes with params and nested paths in the `pages` router.

### 🚀 How to Run
```bash
cd 02-Next/02-Routing/02-dynamic-routing
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
Learn how to capture URL params with dynamic segments and render detail pages.

### 📘 What I Learned
- Dynamic segments like `[id].js`
- Nested dynamic routes
- Getting params in pages

### 🧰 Technology Used
- Next.js
- React, React DOM

### 🔧 How to Run From Scratch
```bash
npm init -y
npm install next react react-dom
# add scripts: dev/build/start
mkdir -p pages/user
echo "export default () => 'Home'" > pages/index.js
npm run dev
```