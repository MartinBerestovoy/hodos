const express = require('express');
import connection from './conexion.js'; // Asegúrate de que la conexión esté configurada correctamente
import cors from 'cors';

const app = express();
const port = 3000;

// Configuración del middleware
app.use(cors({
	origin: 'http://localhost:3000',
	methods:['GET','POST'],
	credentrials: true,
})); // Habilita CORS para todas las solicitudes
app.use(express.json()); // Middleware para parsear JSON en solicitudes

// Función para guardar resultados en la base de datos
function save(req, res) {
  console.log(req.body);
  const { resultado1, resultado2, resultado3, resultado4, resultado5 } = req.body;

  // Realizar la inserción en la base de datos
  const query = "INSERT INTO resultados (resultado1, resultado2, resultado3, resultado4, resultado5) VALUES ($1, $2, 3$, 4$, 5$)";
  connection.query(query, [resultado1, resultado2, resultado3, resultado4, resultado5], (err, result) => {
    if (err) {
      console.error("Error al guardar la información:", err);
      return res.status(500).send("Error al guardar la información en la base de datos");
    }
    console.log("Información guardada correctamente en la base de datos");
    res.status(200).send("Información guardada correctamente");
  });
}

// Ruta para guardar información
app.post('/guardar-informacion', save);

// Ruta para consultar todos los resultados
app.get('/resultados', (req, res) => {
  const query = 'SELECT * FROM resultados';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      return res.status(500).send('Error al realizar la consulta en la base de datos');
    }
    res.status(200).json(results);
  });
});

// Función para guardar información específica de AI
function save_AI(req, res) {
  console.log(req.body);
  const { O_score, C_score, E_score, A_score, N_score, NumericalAptitude, SpatialAptitude, PerceptualAptitude, AbstractReasoning, VerbalReasoning, carrer } = req.body;

  // Realizar la inserción en la base de datos
  const query = "INSERT INTO test (O_score, C_score, E_score, A_score, N_score, NumericalAptitude, SpatialAptitude, PerceptualAptitude, AbstractReasoning, VerbalReasoning, carrer) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
  connection.query(query, [O_score, C_score, E_score, A_score, N_score, NumericalAptitude, SpatialAptitude, PerceptualAptitude, AbstractReasoning, VerbalReasoning, carrer], (err, result) => {
    if (err) {
      console.error("Error al guardar la información:", err);
      return res.status(500).send("Error al guardar la información en la base de datos");
    }
    console.log("Información guardada correctamente en la base de datos");
    res.status(200).send("Información guardada correctamente");
  });
}
app.post('/guardar-ai', save_AI); // Ruta para guardar información de AI

// Función para guardar opciones del frontend
function save_Front(req, res) {
  console.log(req.body);
  const opciones = Array.from({ length: 50 }, (_, i) => req.body[`opcion${i + 1}`]);

  const query = `INSERT INTO opciones (${opciones.map((_, i) => `opcion${i + 1}`).join(', ')}) VALUES (${opciones.map(() => '$').join(', ')})`;

  connection.query(query, opciones, (err, result) => {
    if (err) {
      console.error("Error al guardar la información:", err);
      return res.status(500).send("Error al guardar la información en la base de datos");
    }
    console.log("Información guardada correctamente en la base de datos");
    res.status(200).send("Información guardada correctamente");
  });
}
app.post('/guardar-front', save_Front); // Ruta para guardar información del frontend

// Función para guardar el porcentaje
function save_porcentaje(req, res) {
  console.log(req.body);
  const { averageScore } = req.body;

  // Realizar la inserción en la base de datos
  const query = "INSERT INTO porcentaje (averageScore) VALUES ($1)";
  connection.query(query, [averageScore], (err, result) => {
    if (err) {
      console.error("Error al guardar la información:", err);
      return res.status(500).send("Error al guardar la información en la base de datos");
    }
    console.log("Información guardada correctamente en la base de datos");
    res.status(200).send("Información guardada correctamente");
  });
}
app.post('/guardar-porcentaje', save_porcentaje); // Ruta para guardar porcentaje

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('Hola Mundo'); // Puedes cambiar este mensaje para verificar que el servidor esté funcionando
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});



