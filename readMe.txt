==== Create a CV  using React ====

1. npx create-react-app rami-suliman		// create a React application named rami-suliman

# installing all required dependencies    
2. npm i -D react-router-dom                // add React Router in the application
3. npm i react-icons --save                 // Include popular icons in  React project
4. npm i emailjs-com --save			         
5.
# add 
5. public -> create  index.html
6. src -> create  index.js, index.css,App.js  files, and assets, pages folders
7. pages ->  inside it create all pages that we need 

# run it
8. npm start  -> will open a page on browser   http://localhost:3000/

# deploy it 
9. npm i gh-pages --save-dev
10. package.json -> "homepage": "https://ramisoul84.github.io/rami-suliman"
11. package.json -> scripts -> 
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
12. 
        git init
        git commit -m "first commit"
        git branch -M main
        git remote add origin https://github.com/ramisoul84/rami-suliman.git
        git push -u origin main
13. npm run deploy