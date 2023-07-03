const http = require("http");
const EventEmitter = require("events");

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        mes = "Server rendering";
    }
    else if(req.url === "/about"){
        mes = "About page";
    }
    else{
        mes = "Page not found"
    }
    res.end(`<h1>${mes}</h1>`);
});

const event = new EventEmitter();

event.on("sayMyName", ()=>{
    console.log("My name is abhishek bansal ji");
})

event.on("sayMyName", (sc, msg)=>{
    console.log(`${sc} ${msg}`);
})

event.emit("sayMyName");


// you can also pass parameter

event.emit("sayMyName", 200, "ok");


server.listen(8000, "127.0.0.1", ()=>{
    console.log("server start");
})



