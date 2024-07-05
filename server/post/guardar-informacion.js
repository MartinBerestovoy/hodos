
import connection from "../conexion.js"

async function fetchData() {
    try {
      let response = await fetch('http://localhost:3000'); 
      let data = await response.json(); 
      console.log(data); 
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
    fetchData();
  }
  

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