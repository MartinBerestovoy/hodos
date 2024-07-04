
import connection from "../conexion.js"

async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data'); // Espera a que la promesa se resuelva
      let data = await response.json(); // Espera a que se resuelva
      console.log(data); // Procesa los datos recibidos
    } catch (error) {
      console.error('Error fetching data:', error); // ocupa de errores
    }
  }
  
  fetchData(); // Llama a la función

export default function save(req, res) {
    
    const { resultado1, resultado2, resultado3, resultado4, resultado5 } = req.body;

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

// Iniciar el servidor
    app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});


};