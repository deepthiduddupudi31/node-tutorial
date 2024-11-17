const http=require('http');
const path=require('path');
const fs=require('fs');
const  basepath=path.join('./index.html');
const stylepath=path.join('./styles.css');
const scriptpath=path.join('./script.js');
const index=fs.readFileSync(basepath,'utf8');
const style=fs.readFileSync(stylepath,'utf8');
const script=fs.readFileSync(scriptpath,'utf8');
const server=http.createServer((req,res)=>{
   if(req.url==='/')
   {
     res.writeHead(200,{contenttype:'text/html'});
     res.write(index)
     res.end();
   }
   if(req.url==='/styles.css')
   {
     res.writeHead(200,{contenttype:'text/css'});
     res.write(style)
     res.end();
   }
   if(req.url==='/script.js')
   {
     res.writeHead(200,{contenttype:'text/js'});
     res.write(script)
     res.end();
   }

})
server.listen(8000);