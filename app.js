//prvi primjer-drugi tutorijal
/*
var printstuff = function(stuff){//funckije koje nemaju ime zovu se anonimus function
	console.log(stuff);
}

function mainfunction(anotherfunction, value){
	anotherfunction(value);
}
mainfunction(printstuff, "World");
*/

//drugi primjer
/*
console.log(__filename); //vraca path i ime fajla
console.log(__dirname); //vraca directory fajla

function printstuff2(){
	console.log("This was from setTimeout");
}

setTimeout(printstuff2,5000);//poziva funkciju nakon 5 sekundi

setInterval(printstuff2,2000); //poziva funckiju svaki put nakon 2 sekunde
*/

 // treci primjer
 /*
 console.log("User 1 made a request");
 setTimeout(callback,5000);

 console.log("User 2 made a request");
 setTimeout(callback,5000);

 console.log("User 3 made a request");
 setTimeout(callback,5000);

 function callback(){
 	console.log("Queried the database and delivered data in 5 seconds");
 }
 */

 //cetvrti primjer
 /*
 var athletics = require('./athletics');//povezuje se sa fajlom koji se zeli koristiti
 athletics.relay();
 athletics.longjump();
 */

 //peti primjer kreiranje servera
 /*
 var http = require('http');
 http.createServer(function(request, respons){
 	respons.writeHead(200, {"Content-Type": "text/plain"});
 	respons.write("Hello World");
 	respons.end();
 }).listen(8888);
 */

 //sesti primjer eventi
 /*
 var events = require('events');
 var eventEmitter = new events.EventEmitter();

 var ringbell = function(){
 	console.log("Ring ring ring");
 	eventEmitter.emit('bellrings', 'Welcome');
 }

 eventEmitter.on('doorOpen', ringbell);
 eventEmitter.on('bellrings', function(message){
 	console.log(message);
 })
 eventEmitter.emit('doorOpen');
 */

 //sedmi primjer file sistem module
 /* 
 var fs = require('fs');//cita file
 fs.readFile('input.txt', function(err, data){
 	if(err){
 		console.log(err);
 	} else {
 		console.log("Async data is " + data.toString());
 	}
 });

 var data = fs.readFileSync('input.txt');
 console.log("Sync data is " + data.toString());
 console.log("This is the end");
 */

 //osmi primjer cita i kreira novi fajl
 /*
 var fs = require('fs');

 var readableStream = fs.createReadStream('input.txt');
 var data = '';
 readableStream.setEncoding('UTF8');
 readableStream.on('data', function(chunk){
 	data +=chunk;
 });

 readableStream.on('end', function(){
 	console.log(data);
 });

 var writeData = "Hello World";
 var writebleStream = fs.createWriteStream('outpt.txt');
 writebleStream.write(writeData, 'UTF8');
 writebleStream.end();
 writebleStream.on("finish", function(){
 	console.log("Write completed");
 });
*/

//deveti primjer pipe iz in.txt prebacuje sve u out.txt
var fs = require('fs');
var readableStream = fs.createReadStream('in.txt');
var writebleStream = fs.createWriteStream('out.txt');
readableStream.pipe(writebleStream);
