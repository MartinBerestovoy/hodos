// import mysql from "mysql2/promise";

// const connection = await mysql.createConnection({
//     host: "ep-young-snowflake-a4qgqruy-pooler.us-east-1.aws.neon.tech",
//     user: "default",
//     password: "fY5TQ2VpSxuP",
//     database: "verceldb",
//     port: 5432
// });
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
})

console.log(pool)
// await client.connect();
// console.log("Connected to the database");

export default pool;