## MongoDB Basics (Mongoose)

Express + MongoDB demo using Mongoose models and basic CRUD.

### 🚀 How to Run
```bash
cd 07-Backend/08-mongodb
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
Connect to MongoDB and practice schema/model creation and CRUD operations.

### 📘 What I Learned
- Connecting to MongoDB with Mongoose
- Defining schemas and models
- CRUD operations and validation

### 🧰 Technology Used
- Node.js
- Express.js
- MongoDB, Mongoose

### 🔧 How to Run From Scratch
```bash
npm init -y
npm install express mongoose
echo "const express=require('express');const mongoose=require('mongoose');const app=express();(async()=>{await mongoose.connect('mongodb://localhost:27017/test');app.get('/',(_,res)=>res.send('Mongo OK'));app.listen(3000);})();" > app.js
node app.js
```