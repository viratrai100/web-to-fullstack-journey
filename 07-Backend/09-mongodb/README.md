## MongoDB + Views

MongoDB with Express views (EJS) and a simple CRUD UI.

### 🚀 How to Run
```bash
cd 07-Backend/09-mongodb
npm install
node app.js
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
Display and manage MongoDB data with EJS templates in an Express app.

### 📘 What I Learned
- Rendering lists and detail pages from MongoDB
- Basic forms for create/update/delete
- Route structure for resources

### 🧰 Technology Used
- Node.js
- Express.js
- EJS
- MongoDB, Mongoose

### 🔧 How to Run From Scratch
```bash
npm init -y
npm install express ejs mongoose
echo "const express=require('express');const mongoose=require('mongoose');const app=express();app.set('view engine','ejs');(async()=>{await mongoose.connect('mongodb://localhost:27017/test');app.get('/',(req,res)=>res.render('index'));app.listen(3000);})();" > app.js
mkdir views && echo "<h1>List</h1>" > views/index.ejs
node app.js
```


