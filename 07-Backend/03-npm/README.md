## NPM Basics

Initialize Node projects, add dependencies, and manage scripts.

### 🚀 How to Run
```bash
cd 07-Backend/03-npm
npm install
node script.js
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
Understand `package.json`, dependency types, and `npm run` scripts.

### 📘 What I Learned
- `npm init`, install, uninstall
- Dev vs prod dependencies
- npm scripts and semantic versioning

### 🧰 Technology Used
- Node.js
- NPM

### 🔧 How to Run From Scratch
```bash
# 1) Init project and add a package (example: lodash)
npm init -y
npm install lodash

# 2) Create script
echo "const _=require('lodash');console.log(_.capitalize('hello'))" > script.js

# 3) Run
node script.js
```