const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url == "/home"){
        res.write('<html>');
        res.write('<head><title>home</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('<html>');
    }else if( req.url=="/about"){
        res.write('<html>');
        res.write('<head><title>about</title></head>')
        res.write('<body><h1>Welcome to about</h1></body>')
        res.write('<html>');
    }
    else if(req.url=="/node" ){
        res.write('<html>');
        res.write('<head><title>node</title></head>')
        res.write('<body><h1>Welcome to node</h1></body>')
        res.write('<html>');
    }else{
        res.write('<html>');
        res.write('<head><title>error</title></head>')
        res.write('<body><h1>Wrong URL</h1></body>')
        res.write('<html>');
    }
});

server.listen(4000);