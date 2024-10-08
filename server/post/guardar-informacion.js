
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
 import { createServer } from 'http';
 import fetch from 'node-fetch';


 const app = express();
 const port = 3000;
 const hostname = 'localhost';


 app.use(express.json());


 // ruta para guardar informacion
 app.post('/save', (req, res) => {
   console.log(req.body);
   const { resultado1, resultado2, resultado3, resultado4, resultado5 } = req.body;


   connection.query("INSERT INTO resultados (resultado1, resultado2, resultado3, resultado4, resultado5) VALUES (?, ?, ?, ?, ?)", [resultado1, resultado2, resultado3, resultado4, resultado5], (err, result) => {
     if (err) {
       console.error("Error al guardar la información:", err);
       if (!res.headersSent) {
         res.status(500).send("Error al guardar la información en la base de datos");
       }
       return;
     }
     console.log("Información guardada correctamente en la base de datos");
     if (!res.headersSent) {
       res.status(200).send("Información guardada correctamente");
     }
   });
 });


 //incia expresss
 app.listen(port, () => {
   console.log(`Servidor corriendo en el puerto ${port}`);
 });


//para probar
  const server = createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Abogacia');
 });
server.listen(port + 1, hostname, () => {
  console.log(`Server running at http://${hostname}:${port + 1}`);
 });
// //no se si es nesasario adicional de HTTP


// // es nesesaria?
 async function fetchData() {
   try {
     let response = await fetch(`http://${hostname}:${port + 1}`);
     let data = await response.json();
     console.log(data);
   } catch (error) {
     console.error('Error fetching data:', error);
   }
 }
 const guardarInformacion = () => {
 
 };


 export default guardarInformacion;


 app.post('/guardar-ai', (req, res) => {
  // Aquí se manejará la información que recibas
  const data = req.body; // Obtén los datos que enviaste
  console.log(data); // Muestra los datos en la consola


  // Aquí podrías hacer algo con los datos, como guardarlos en la base de datos
  res.status(200).send('Información guardada correctamente'); // Respuesta al cliente
});


 fetchData();
app.get('/', (req, res) => {
  res.send('Hola Mundo ') //poner mensaje ente comillas
 })
  // aca puedo poner caulquier cosa como para ver en el front, esto es una ruta hay que hacer mas


 app.post('/guardar', save)
 app.post("/guardar-informacion", save);
 app.listen(PORT, (error) => {
  if (!error)
    console.log(`Server is Successfully Running, and App is listening on port ${PORT}`);
  else
    console.log("Error occurred, server can't start", error);
 }
 );



