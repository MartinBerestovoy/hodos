
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
    connection.query("INSERT INTO resultados  (resultado1, resultado2, resultado3, resultado4, resultado5) VALUES ($1, $2, $3, $4, $5)", [resultado1, resultado2, resultado3, resultado4, resultado5], (err, result) => {
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
    res.send('Hola Mundoo ') //poner mensaje ente comillas
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
        const port = process.env.port || 3000;
    });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});


function save_AI(req, res) {
    console.log(req.body);
    const { O_score, C_score, E_score, A_score, N_score, NumericalAptitude , SpatialAptitude, PerceptualAptitude,AbstractReasoning, VerbalReasoning, carrer } = req.body; //nombre tabla 

    // Realizar la inserción en la base de datos
    connection.query("INSERT INTO test (O_score, C_score, E_score, A_score, N_score, NumericalAptitude, SpatialAptitude, PerceptualAptitude, AbstractReasoning, VerbalReasoning, carrer) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", [O_score, C_score, E_score, A_score, N_score, NumericalAptitude , SpatialAptitude, PerceptualAptitude, AbstractReasoning, VerbalReasoning, carrer ], (err, result) => {
        if (err) {
            console.error("Error al guardar la información:", err);
            res.status(500).send("Error al guardar la información en la base de datos");
            return;
        }
        console.log("Información guardada correctamente en la base de datos");
        res.status(200).send("Información guardada correctamente");
    });


};  
app.post('/guardar-ai', save_AI); //llamo a la funcion

//https://hodos-server.vercel.app/guardar-ai --> ruta 

function save_Front(req, res) {
    console.log(req.body);
    const { opcion1, opcion2, opcion3, opcion4, opcion5, opcion6, opcion7, opcion8, opcion9, opcion10, opcion11, opcion12, opcion13, opcion14, opcion15, opcion16, opcion17, opcion18, opcion19, opcion20, opcion21, opcion22, opcion23, opcion24, opcion25, opcion26, opcion27, opcion28, opcion29, opcion30, opcion31, opcion32, opcion33, opcion34, opcion35, opcion36, opcion37, opcion38, opcion39, opcion40, opcion41, opcion42, opcion43, opcion44, opcion45, opcion46, opcion47, opcion48, opcion49, opcion50  } = req.body; //nombre tabla 

    // Realizar la inserción en la base de datos
    connection.query("INSERT INTO opciones (opcion1, opcion2, opcion3, opcion4, opcion5, opcion6, opcion7, opcion8, opcion9, opcion10, opcion11, opcion12, opcion13, opcion14, opcion15, opcion16, opcion17, opcion18, opcion19, opcion20, opcion21, opcion22, opcion23, opcion24, opcion25, opcion26, opcion27, opcion28, opcion29, opcion30, opcion31, opcion32, opcion33, opcion34, opcion35, opcion36, opcion37, opcion38, opcion39, opcion40, opcion41, opcion42, opcion43, opcion44, opcion45, opcion46, opcion47, opcion48, opcion49, opcion50) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50)", [opcion1, opcion2, opcion3, opcion4, opcion5, opcion6, opcion7, opcion8, opcion9, opcion10, opcion11, opcion12, opcion13, opcion14, opcion15, opcion16, opcion17, opcion18, opcion19, opcion20, opcion21, opcion22, opcion23, opcion24, opcion25, opcion26, opcion27, opcion28, opcion29, opcion30, opcion31, opcion32, opcion33, opcion34, opcion35, opcion36, opcion37, opcion38, opcion39, opcion40, opcion41, opcion42, opcion43, opcion44, opcion45, opcion46, opcion47, opcion48, opcion49, opcion50 ], (err, result) => {
        if (err) {
            console.error("Error al guardar la información:", err);
            res.status(500).send("Error al guardar la información en la base de datos");
            return;
        }
        console.log("Información guardada correctamente en la base de datos");
        res.status(200).send("Información guardada correctamente");
    });


};  
app.post('/guardar-Front', save_Front); //llamo a la funcion

//https://hodos-server.vercel.app/guardar-front  la ruta para mandar la info

function save_porcentaje (req, res) {
    console.log(req.body);
    const { averageScore } = req.body; //nombre tabla 

    // Realizar la inserción en la base de datos
    connection.query("INSERT INTO porcentaje (averageScore) VALUES ($1)", [averageScore ], (err, result) => {
        if (err) {
            console.error("Error al guardar la información:", err);
            res.status(500).send("Error al guardar la información en la base de datos");
            return;
        }
        console.log("Información guardada correctamente en la base de datos");
        res.status(200).send("Información guardada correctamente");
    });}
    app.post('/guardar-porcentaje', save_porcentaje); //llamo a la funcion

    //https://hodos-server.vercel.app//guardar-porcentaje --> ruta

    
 