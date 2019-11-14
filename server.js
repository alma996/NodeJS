var http = require('http');//kreira server
var url = require('url');

function startserver(route, handle){
	function onRequest(request, response){
		var reviewData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request recived for " + pathname);
		request.setEncoding("utf8");

		request.addListener("data", function(chunk){
			reviewData += chunk;
		});

		request.addListener("end", function(){
			route(handle,pathname,response,reviewData);
		})
	//response.writeHead(200,{"Content-Type": "text/plain"});
		//response.write("Hello from our server module");
		//response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server started on localhost post 8888");
}
exports.startserver = startserver;