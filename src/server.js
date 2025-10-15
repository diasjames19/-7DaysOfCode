import servidorHttp from 'http';


const testConction  = servidorHttp.createServer((req,res)=>{

    res.writeHead(200,{'Content-type': 'text/html'});
    res.end('Node, Server!')
});
testConction.listen(3000);
console.log("Acesso ao Servido pela porta:3000");