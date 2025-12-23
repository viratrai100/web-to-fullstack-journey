## E‑Commerce Backend (Mini Project)

Express + MongoDB backend with auth, products, and admin views.

### 🚀 How to Run
```bash
cd 07-Backend/15-Project
npm install
node app.js
```

If MongoDB URI is required, set it via environment variable:
```bash
set MONGODB_URI=mongodb://localhost:27017/shop   # Windows (PowerShell use $env:MONGODB_URI)
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
Provide basic store features: user auth, product CRUD, and admin pages.

### 📘 What I Learned
- JWT auth and protected routes
- MVC structure with controllers, routes, and models
- Admin features and role-based access

### 🧰 Technology Used
- Node.js
- Express.js
- MongoDB, Mongoose
- JSON Web Tokens

### 🔧 How to Run From Scratch
```bash
npm init -y
npm install express mongoose jsonwebtoken bcrypt ejs multer dotenv
echo "/* skeleton for ecommerce backend with express+mongoose */" > app.js
```