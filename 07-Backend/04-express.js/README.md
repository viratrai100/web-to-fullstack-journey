## Express.js Intro

Basic Express server showcasing routes and middleware.

### 🚀 How to Run
```bash
cd 07-Backend/04-express.js
npm install
node script.js
# or
npx nodemon script.js
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
Start an Express server and define routes and middleware.

### 📘 What I Learned
- Creating routes and middleware
- Handling params, query, and JSON bodies
- Error handling and status codes

### 🧰 Technology Used
- Node.js
- Express.js

### 🔧 How to Run From Scratch
```bash
npm init -y
npm install express
echo "const express=require('express');const app=express();app.get('/',(_,res)=>res.send('OK'));app.listen(3000);" > script.js
node script.js
```