// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.end(`<h1>HOME PAGE`);
// })
// server.listen(5000);
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end(`<h1>Home page</h1>`);
    }
    else if(req.url==='/about')
    {
        res.end(`<h1>About page`);
    }
    else
    {
        res.end(`<h1>url is wrong<h1>
                  <a href="/">Back Home page</a>`)
    }
})
server.listen(5000);