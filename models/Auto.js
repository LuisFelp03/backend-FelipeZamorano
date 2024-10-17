import { Schema, model } from "mongoose";

let collection = 'autos';
let autoSchema = new Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true }
}, {
    timestamps: true  // guarda la fecha de creación en la base de datos
});

let Auto = model(collection, autoSchema);  // generar el modelo
export default Auto;
