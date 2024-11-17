const eventemitter=require('events');
const events=new eventemitter();
events.on('event',()=>{
    console.log('event is emitting');
})
events.emit('event');