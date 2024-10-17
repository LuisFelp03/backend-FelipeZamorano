// Para generar un nuevo script se conecto al dotenv, las variables de entorno, la base de datos y el modelo que se creo de autos
import 'dotenv/config.js';
import '../../config/database.js';
import Auto from '../Auto.js';

let cars = [
    {
        marca: "Toyota",
        modelo: "Corolla"
    },
    {
        marca: "Honda",
        modelo: "Civic"
    },
    {
        marca: "Ford",
        modelo: "Mustang"
    },
    {
        marca: "Chevrolet",
        modelo: "Camaro"
    },
    {
        marca: "BMW",
        modelo: "3 Series"
    },
    {
        marca: "Mercedes-Benz",
        modelo: "C-Class"
    },
    {
        marca: "Audi",
        modelo: "A4"
    },
    {
        marca: "Volkswagen",
        modelo: "Golf"
    },
    {
        marca: "Nissan",
        modelo: "Altima"
    },
    {
        marca: "Hyundai",
        modelo: "Elantra"
    }
];

// Insertar los autos en la base de datos
Auto.insertMany(cars)
    .then(() => {
        console.log("Autos insertados exitosamente");
        process.exit();  // Cierra el proceso cuando termine la inserción
    })
    .catch(error => {
        console.error("Error insertando autos:", error);
        process.exit(1);  // Cierra el proceso con código de error
    });
