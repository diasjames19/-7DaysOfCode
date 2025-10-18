import  Database  from "sqlite3";
import 'dotenv/config'


async function connectMyDb() {
   
    const databaseName = process.env.DB_NAME;
    const db = new Database.Database(`./src/database/${databaseName}.db`,(err)=>{

        if(err){
           console.error('Erro ao conectar ao banco:', err.message);
        }
        else{
            console.log('Conexão com o banco de dados SQLite estabelecida com sucesso!');
            }
});
}
export default connectMyDb;
/*

  CREATE TABLE IF NOT EXISTS missions  (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name VARCHAR(70) NOT NULL,
    crew VARCHAR(100) NOT NULL,
    spacecraft VARCHAR(50) NOT NULL,
    destination VARCHAR(50),
    status VARCHAR(20) NOT NULL,
    duration INTEGER NOT NULL,


*/