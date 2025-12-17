## Express + EJS Revise

Revision project to practice Express, EJS views, and basic CRUD.

### 🚀 How to Run
```bash
cd 07-Backend/07-revise
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
Review routing, views, and basic forms in an Express app.

### 📘 What I Learned
- Setting up routes and views
- Rendering EJS templates with data
- Simple form handling

### 🧰 Technology Used
- Node.js
- Express.js
- EJS

### 🔧 How to Run From Scratch
```bash
npm init -y
npm install express ejs
echo "const express=require('express');const app=express();app.set('view engine','ejs');app.get('/',(req,res)=>res.render('index'));app.listen(3000);" > index.js
mkdir views && echo "<h1>Revise</h1>" > views/index.ejs
node index.js
```