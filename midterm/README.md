## How start a next.js and playwright project https://github.com/NJIT-WIS/midterm-portfolio-alejjuuu
```bash
#**********************
#Updated nav and foother 
#***********************

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


midterm/
|-- _next
|-- components/
    |-- About.tsx
    |-- All_Products.tsx    
    |-- Experience.tsx
    |-- Footer.tsx
    |-- Navbar.tsx
    |-- Project.tsx
    |-- Skills.tsx
    |-- Welcome.tsx
|-- node_modules
|-- out
    |-- _next
    |-- images
    404.html
    index.html
    layout.html
    nex.svg
    projects.html
    vercel.svg
|-- pages
    |-- Asseets
        |-- js
    |-- __app.tsx
    |-- __document.tsx
    |-- index.tsx
    |-- layout.tsx
    |-- projects.tsx
|-- public/
    |-- images
        |-- e-commerce-web-app.webp
        |-- photography-portfolio.webp
        |-- profile-image.jpg
    |-- next.svg
    |-- vercel.svg
|-- scripts
    |-- automated_test.test.js
    |-- codegen.test.js
    |-- hardCode.test.js
    |-- screenshot.test.js
|-- styless
    |-- globals.css
|-- .eslintrc.json
|-- .gitignore
|-- next-env.d.ts
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- README.md
|-- tailwind.config.ts
|-- tsconfig.json



#To reditect users to another page withing the application
npm install react-router-dom


#run playwright tests from terrminal
node testname.test.js


npm install --save-dev next


#install babel 
npm install next

#run codegen with playwright
npx playwright codegen localhost:3000

npm install --save @babel/present-react


#run playwright