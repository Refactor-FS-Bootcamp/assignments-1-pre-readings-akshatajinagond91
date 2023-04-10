var url="http:\\mylogger.io\log";

// console.log(module);

const EventEmmiter=require('events');

class Logger extends EventEmmiter{
    log(message){
        console.log("message");

        this.emit("messageLogged",{name:"akshu",url:"htpps://--"});
    }
}

module.exports=Logger;
