const fs=require('fs');
const path=require('path');
const basepath=path.join('./content','subcontent','fifth.txt');
fs.writeFileSync(basepath,'this is fifth text file this is fifth text file this is fifth text file this is fifth text file this is fifth text file v this is fifth text file this is fifth text file this is fifth text file this is fifth text file this is fifth text file this is fifth text file');
const stream=fs.createReadStream(basepath,{encoding:"utf8"});
stream.on('data',(res,err)=>{
    if(err)
    {
        throw err;
    }
    console.log(res)
})