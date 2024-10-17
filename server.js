import express from "express"; // Importa el módulo de Express para crear un servidor web
import "dotenv/config.js"; // Carga las variables de entorno definidas en el archivo .env
import "./config/database.js"; // Conecta la base de datos configurada en el archivo database.js
import cors from 'cors'; // Importa el módulo CORS para permitir peticiones desde diferentes dominios
import morgan from "morgan"; // Importa el middleware Morgan para registrar las solicitudes HTTP en la consola
import indexRouter from './router/index.js'

const server = express(); // Crea una instancia de un servidor de Express

const PORT = process.env.PORT || 8080; // Define el puerto del servidor. Si no está en las variables de entorno, usa el puerto 8080

const ready = () => console.log("server ready in port :" + PORT); // Función que imprime un mensaje cuando el servidor está listo

// server.get('/', (request, response) => {
//     response.send('hola mundo en Express');
// });

// server.get('/saludo', (request, response) => {
//     response.send('Bienvenido al Express');
// });

server.use(express.json()); // Middleware para permitir que el servidor procese solicitudes con formato JSON
server.use(express.urlencoded({ extended: true })); // Middleware para procesar solicitudes con datos codificados en la URL (formulario HTML)
server.use(cors()); // Middleware para habilitar CORS y permitir que otros dominios hagan solicitudes al servidor
server.use(morgan('dev')); // Middleware para registrar cada solicitud HTTP en la consola, en un formato legible para desarrolladores (modo 'dev')

//router
server.use('/api', indexRouter)

server.listen(PORT, ready); // Inicia el servidor y escucha en el puerto definido. Al estar listo, llama a la función `ready`

// console.log(process.env.PORT); // (Comentado) Imprime el valor de la variable de entorno `PORT` (útil para depuración)

//clase mongo schemas y endpoints voy por 1h 1 min


