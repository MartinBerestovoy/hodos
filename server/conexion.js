import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "ep-young-snowflake-a4qgqruy-pooler.us-east-1.aws.neon.tech",
    user: "default",
    password: "fY5TQ2VpSxuP",
    database: "verceldbnm",
});

export default connection;