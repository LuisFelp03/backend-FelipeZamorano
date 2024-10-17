import "dotenv/config.js"
import '../../config/database.js'
import User from '../User.js'

let users = [
    {
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        password: "password123",
        photo: "https://example.com/photos/juan.jpg",
        role: 1
    },
    {
        name: "Ana García",
        email: "ana.garcia@example.com",
        password: "password456",
        photo: "https://example.com/photos/ana.jpg",
        role: 2
    },
    {
        name: "Luis Martínez",
        email: "luis.martinez@example.com",
        password: "password789",
        photo: "https://example.com/photos/luis.jpg",
        role: 1
    },
    {
        name: "María López",
        email: "maria.lopez@example.com",
        password: "password321",
        photo: "https://example.com/photos/maria.jpg",
        role: 3
    },
    {
        name: "Carlos González",
        email: "carlos.gonzalez@example.com",
        password: "password654",
        photo: "https://example.com/photos/carlos.jpg",
        role: 1
    },
    {
        name: "Lucía Sánchez",
        email: "lucia.sanchez@example.com",
        password: "password987",
        photo: "https://example.com/photos/lucia.jpg",
        role: 2
    },
    {
        name: "Miguel Ramírez",
        email: "miguel.ramirez@example.com",
        password: "password111",
        photo: "https://example.com/photos/miguel.jpg",
        role: 3
    },
    {
        name: "Laura Fernández",
        email: "laura.fernandez@example.com",
        password: "password222",
        photo: "https://example.com/photos/laura.jpg",
        role: 1
    },
    {
        name: "Pedro Rodríguez",
        email: "pedro.rodriguez@example.com",
        password: "password333",
        photo: "https://example.com/photos/pedro.jpg",
        role: 2
    },
    {
        name: "Sofía Herrera",
        email: "sofia.herrera@example.com",
        password: "password444",
        photo: "https://example.com/photos/sofia.jpg",
        role: 3
    }
];

User.insertMany(users)