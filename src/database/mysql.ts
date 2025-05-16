import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import {Signale} from 'signale'

dotenv.config()
const signale = new Signale()

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    waitForConnection: true,
    connectionLimit: 10
}

const pool = mysql.createPool(config)

async function testConnection() {
    try {
        const connection = await mysql.createConnection(config);
        signale.success('Conexión exitosa a la base de datos');
        await connection.end(); // Cierra la conexión
    } catch (error: any) {
        signale.error('Error en la conexión:', error.message);
    }
}

testConnection();

export async function query(sql: string, params: any[]) {

    try{
        const con = await pool.getConnection()

        const result = await con.execute(sql, params)
        con.release()
        return result

    } catch(error: any){
        signale.error(error.message)
        return null
    }

}