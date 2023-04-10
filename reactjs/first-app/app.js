/*
let log=require("./hello.js");


log("message");

console.log(__filename);
console.log(__dirname);

const path=require('path');
let obj=path.parse(__filename);
console.log(obj);

var os=require('os');
var totalMemory=os.totalmem();
var freeMemory=os.freemem();

console.log(`total memory: ${totalMemory}`);
console.log(`free memory: ${freeMemory}`);

const fs=require('fs');
var feles=fs.readdirSync('./');
console.log(feles);

*/


const EventEmmiter=require('events');

const Logger=require('./hello');

var logger= new Logger();

logger.on("messageLogged",(arg)=>{
  console.log("Listner called",arg);
});

logger.log("message");


