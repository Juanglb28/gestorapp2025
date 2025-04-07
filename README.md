
# Luna Hotels

Welcome to Luna Hotel, a web client for the purpose of managing reservations for our hotel chain. This MVP is oriented to a phased launch. In this phase, the home section is available, with images of our facilities.

## 🌟 Features

- * HTML
- * CSS
- **React 18**
- **Vite**
- **CSS**
- **React Router**
- **React Icons** 

## 🔧 INSTALL

Follow these steps to run the project in your local environment

1-
```bash
2-
git clone https://github.com/JDiegx/gestorapp2025.git

3-
cd gestorapp2025

4-
npm install

5-
npm run dev
```
1.  Backend Creation with  Node + Express
On your IDE type : "Ctrl+Shift+ñ" to open a console
 
mkdir backend
cd backend
npm init -y
npm install express cors

--This create a file package.json--


2. Express Install
On your IDE type : "Ctrl+Shift+ñ" to open a console
npm install express cors

--Express: Framework web for Node.js--
--cors: Allows your frontend (React) to access your backend.


3. Create the project structure
backend/
│
├── index.js         # Entry point
├── routes/          # API routes
│   └── reservas.js  # Examples: reservas
└── controllers/     # Logic of each route
    └── reservasController.js



✅ 4. Extra tip:

*Make sure the backend is running on a different port (e.g., 3001) to avoid conflicts with React (3000).
*Use a proxy in React's package.json to avoid CORS issues (optional if you're using CORS in Node).



