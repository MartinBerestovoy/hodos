
// // import connection from "../conexion.js"

// // async function fetchData() {
// //   try {
// //     let response = await fetch('http://localhost:3000');
// //     let data = await response.json();
// //     console.log(data);
// //   } catch (error) {
// //     console.error('Error fetching data:', error);
// //   }
// //   fetchData();
// // }


// // export default function save(req, res) {
// //   console.log(req.body);
// //   const { resultado1, resultado2, resultado3, resultado4, resultado5 } = req.body;

// //   // Realizar la inserción en la base de datos
// //   connection.query("INSERT INTO tabla (resultado1, resultado2, resultado3, resultado4, resultado5) VALUES (?, ?, ?, ?, ?)", [resultado1, resultado2, resultado3, resultado4, resultado5], (err, result) => {
// //     if (err) {
// //       console.error("Error al guardar la información:", err);
// //       res.status(500).send("Error al guardar la información en la base de datos");
// //       return;
// //     }
// //     console.log("Información guardada correctamente en la base de datos");
// //     res.status(200).send("Información guardada correctamente");
// //   });

// //   // Iniciar el servidor
// //   app.listen(port, () => {
// //     console.log(`Servidor corriendo en el puerto ${port}`);
// //   });

// //   const server = createServer((req, res) => {
// //     res.statusCode = 200;
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.send('Abogacia');
// //   });

// //   server.listen(port, hostname, () => {
// //     console.log(`Server running at http://localhost${port}`); // significa-> Server running at http://localhost3000
// //   });

// // };

import express from 'express';
import connection from '../conexion.js'; 

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta para guardar información
app.post('/guardar-informacion', (req, res) => {
  console.log(req.body);
  const { tecnologia, deporte, lectura, viajar, musica } = req.body; // Asegúrate de que estos nombres coincidan con los del frontend

  // Inserta en la base de datos
  connection.query(
    "INSERT INTO resultados (resultado1, resultado2, resultado3, resultado4, resultado5) VALUES (?, ?, ?, ?, ?)", 
    [tecnologia, deporte, lectura, viajar, musica], 
    (err, result) => {
      if (err) {
        console.error("Error al guardar la información:", err);
        return res.status(500).send("Error al guardar la información en la base de datos");
      }
      console.log("Información guardada correctamente en la base de datos");
      res.status(200).send("Información guardada correctamente");
    }
  );
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Hola Mundo'); 
});
