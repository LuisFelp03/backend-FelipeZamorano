import mongoose from "mongoose";

let url = process.env.URI_MONGO;

console.log(url);

// mongoose.connect(url)  // Primera forma de conectar a base de datos
//     .then(() => console.log("Base de datos conectada"))
//     .catch(error => console.log("Error conectando a la base de datos:", error));





async function coneccionBaseDeDatos() {  //Segunda forma de conectarse a una base de datos usando una funcion
    try {
        await mongoose.connect(url); // Usar await para esperar la conexión
        console.log("Base de datos conectada");
    } catch (error) {
        console.log("Error conectando a la base de datos:", error); // Uso correcto del catch
    }
}

coneccionBaseDeDatos(); // Llamar a la función para conectar a la base de datos