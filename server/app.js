
import express from 'express';
import connection from './conexion.js';
import { createServer } from 'http';
import fetch from 'node-fetch';

// import connection from "../conexion.js"

// async function fetchData() {
//   try {
//     let response = await fetch('http://localhost:3000');
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
//   fetchData();
// }


function save(req, res) {
	console.log(req.body);
	const { resultado1, resultado2, resultado3, resultado4, resultado5 } = req.body; //nombre tabla 

	// Realizar la inserción en la base de datos
	connection.query("INSERT INTO tabla (resultado1, resultado2, resultado3, resultado4, resultado5) VALUES (?, ?, ?, ?, ?)", [resultado1, resultado2, resultado3, resultado4, resultado5], (err, result) => {
		if (err) {
			console.error("Error al guardar la información:", err);
			res.status(500).send("Error al guardar la información en la base de datos");
			return;
		}
		console.log("Información guardada correctamente en la base de datos");
		res.status(200).send("Información guardada correctamente");
	});


};

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


// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Abogacia');
// });
// server.listen(port + 1, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port + 1}`);
// }); 
//no se si es nesasario adicional de HTTP

// es nesesaria?
app.get('/', (req, res) => {
	res.send('Hola Mundo ') //poner mensaje ente comillas
}) // aca puedo poner caulquier cosa como para ver en el front, esto es una ruta hay que hacer mas

// app.post('/guardar', save)
app.post("/guardar-informacion", save);

// hacer un get de los resultados e incertarlos manuealmente en la ytabla haciendo un a query en vercel


app.get('/resultados', (req, res) => {
	const query = 'SELECT * FROM resultados';

	connection.query(query, (error, results) => {
		if (error) {
			console.error('Error al realizar la consulta:', error);
			res.status(500).send('Error');
			return;
		}
		const PORT = process.env.PORT || 3000;
	});
});

app.listen(PORT, () => {
	console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});