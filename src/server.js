import servidorHttp from 'http';
import connectMyDb from './database/db.js';


const appConnction  = servidorHttp.createServer((req,res)=>{

    res.writeHead(200,{'Content-type': 'text/html'});
    res.end('Node, Server!')
});
connectMyDb();
appConnction.listen(3000);
console.log("Acesso ao Servido pela porta:3000");