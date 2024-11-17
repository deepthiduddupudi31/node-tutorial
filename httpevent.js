const http=require('http');
const server=http.createServer();
server.on('request',(req,res)=>{
    res.end('server is listening');
})
server.listen(3000);