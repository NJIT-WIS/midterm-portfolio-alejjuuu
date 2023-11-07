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


my-next-app/
|-- .next
|-- components/
|   |-- Navbar.tsx
    |-- About.tsx
    |-- All_Products.tsx
    |-- Experience.tsx
    |-- Footer.tsx
    |-- Project.tsx
    |-- Skills.tsx
    |-- Welcome.tsx
|-- node_modules
|-- pages
    |-- Asseets
        |-- js
    |-- __app.tsx
    |-- __document.tsx
    |-- indeex.tsx
    |-- layout.tsx
    |-- projects.tsx
|-- public/
    |-- images
        |-- profile-image.jpg
    |-- next.svg
    |-- vercel.svg
|-- scripts
    |-- screenshots
        |-- e-commerce-web-app.jpg
        |-- photography-portfolio.jpg
    |-- automated_test.test.js
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