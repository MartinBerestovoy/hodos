import express from 'express';
import save from './post/guardar-informacion.js'

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hola Mundo ') //poner mensaje ente comillas
}) // aca puedo poner caulquier cosa como para ver en el front, esto es una ruta hay que hacer mas

// app.post('/guardar', save)
app.post("/guardar-informacion", save);

app.listen(PORT, (error) => {
	if (!error)
		console.log(`Server is Successfully Running, and App is listening on port ${PORT}`);
	else
		console.log("Error occurred, server can't start", error);
}
);