import { Client } from 'pg';

export default async (req, res) => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();

    const result = await client.query('SELECT materia, promedio* FROM myp'); // tablka que quees usqar creoo

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  } finally {
    await client.end();
  }
};