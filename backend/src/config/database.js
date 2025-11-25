import mysql2 from 'mysql2';

const dbConnect = mysql2.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Froydbanatao-03",
    database: "queue_system",
    port: 8080
}).promise();

export default dbConnect;