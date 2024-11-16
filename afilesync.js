const  fs=require('fs');
const  path=require('path');
const basepath=path.join('./content','subcontent','first.txt');
const need=path.join('./content','subcontent','fourth.txt');

fs.readFile(basepath,'utf8',(err,res)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(res);
})
fs.writeFile(need,'this is fourth file',(err,res)=>{
    if(err)
    {

        console.log(err);
        return;
    }
    console.log(res);
})
