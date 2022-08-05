import*as mysql from "mysql2"
import "dotenv/config"

const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_DATABASE
})
export default db;