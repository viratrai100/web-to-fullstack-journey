## EJS Routing Project

Server‑rendered pages using Express and EJS templates with simple routes.

### 🚀 How to Run
```bash
cd 07-Backend/06-ejs-routing-project
npm install
node index.js
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
Render dynamic pages with EJS templates and practice routing in Express.

### 📘 What I Learned
- Server-side rendering with EJS
- Layouts/partials and passing data to views
- Static files and view engine setup

### 🧰 Technology Used
- Node.js
- Express.js
- EJS

### 🔧 How to Run From Scratch
```bash
npm init -y
npm install express ejs
echo "const express=require('express');const app=express();app.set('view engine','ejs');app.get('/',(req,res)=>res.render('index'));app.listen(3000);" > index.js
mkdir views && echo "<h1>Home</h1>" > views/index.ejs
node index.js
```