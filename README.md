# backend-FelipeZamorano

Backend
Primero creas repoo en git
Clonas
Te paras en el repo
Verificas que tengas note con note -v
Luego 
1)	Npm init -y
2)	 Npm install express
3) crear el .gitignore
4. dentro del gitignore ira node_modules
5. dentro del package.json despues del main se pondra   "type": "module",
6. crear el primer archivo en este caso se llamara server.js
7. dentro del server ira 

import express from "express";

const server = express()

const PORT = 8080

const ready  = ()=> console.log("server ready in port :"+PORT);

server.listen(PORT,ready)
8. dentro del package.json borrar el script test y poner     "start": "node ./server.js"
9. abrir consola bash y darle npm start para comprobar que este bien

con ctrl + c puede cerrar el servidor

10. cerrarlo y ejecutar npm install --save-dev nodemon  esto permite ejecutar cambios en caliente osea al tiempo
11. en package.json en la parte de scripts debe agregar el     "dev":"nodemon ./server.js" y usar el npm run dev para comprobar, hasta ahora el package.json se veria asi

{
  "name": "backend-felipezamorano",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node ./server.js",
    "dev": "nodemon ./server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.21.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.7"
  }
}

12. parar el server ctrl + c y ejecutar npm install dotenv
13. luego en el archivo server agregar import "dotenv/config.js"
14. para visualizar que hay console.log(process.env);
15. crear un archivo llamado .env y en .gitignore agregarlo tal cual .env
16. y en server.js quedaria asi

import express from "express";
import "dotenv/config.js"


const server = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("server ready in port :" + PORT);

server.listen(PORT, ready)

console.log(process.env.PORT);

2h 27 min empieza postman

2h 35 min empieza mongo

clase intro mongo

1. instalar npm install mongoose 

min 31:28 intro mongo parte 2