## How start a next.js and playwright project https://github.com/NJIT-WIS/midterm-portfolio-alejjuuu
```bash
#**********************
#Updated nav and foother 
#**********************

#initialize github
git init

git clone repo

#install and create a next.js app
npx create-next-app my-next-app

#install playwright
npm install playwright

#development server
npm run dev

# for production
npm run build

#start production server
npm start

#linting runing 
npm run lint

#testing with playwright
npm test


my-next-app/
|-- pages/
    |-- favicon.ico
    |-- globals.css
    |-- layout.tsx
    |-- index.tsx
|-- components/
|   |-- Navbar.tsx
|-- node_modules/
|-- public/
|   |-- next.svg
|   |-- vercel.svg
|-- scripts
    |-- screenshot.test.js
|-- 
|-- test-results
|-- .eslintrc.json
|-- .gitignore
|-- next-env.d.ts
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- README.md
|-- tailwind.config.ts
|-- tsconfig.json