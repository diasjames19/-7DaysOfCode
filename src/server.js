import servidorHttp from 'http';
import connectMyDb from './database/db.js';
import createTableModels from './models/missionModel.js'
import api from './routers/router.js';
import express from 'express';

const app  = express();
const appConnction  = servidorHttp.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'text/html'});
    res.end('Node, Server!')
});
app.use(express.json());
app.use('/api',api);
connectMyDb();
createTableModels();
appConnction.listen(3000);
console.log("Acesso ao Servido pela porta:3000");