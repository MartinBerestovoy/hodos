// import mysql from "mysql2/promise";

// const connection = await mysql.createConnection({
//     host: "ep-young-snowflake-a4qgqruy-pooler.us-east-1.aws.neon.tech",
//     user: "default",
//     password: "fY5TQ2VpSxuP",
//     database: "verceldb",
//     port: 5432
// });
import pg from 'pg';
const { Client } = pg;

const client = new Client({
  user: "default",
  host: "ep-young-snowflake-a4qgqruy-pooler.us-east-1.aws.neon.tech",
  password: "fY5TQ2VpSxuP",
  database: "verceldb",

  port: 5432,
  ssl: true
});

client.connect();
console.log("Connected to the database");

export default client;