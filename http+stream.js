const http=require('http');
const fs=require('fs');
const path=require('path')
const server=http.createServer();
server.on('request',(req,res)=>{
  const basepath=path.join('./content','subcontent','fifth.txt');
  const stream=fs.createReadStream(basepath,{encoding:'utf8'});
  stream.on('open',()=>{
    stream.pipe(res);
  })
  
  
})
server.listen(4000);