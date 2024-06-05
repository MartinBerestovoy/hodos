const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hola Mundo ') //poner mensaje ente comillas
}) // aca puedo poner caulquier cosa como para ver en el front 

app.get('/hola', (req, res) => { // url a la que uqeremos que vaya (donde esta el hola)
	res.send({ messege: 'Hola Mundo!' }) //con res.end no manda nada
})


app.listen(PORT, (error) => {
	if (!error)
		console.log(`Server is Successfully Running, and App is listening on port ${PORT}`);
	else
		console.log("Error occurred, server can't start", error);
}
);
