var server = require("./server");
var router = require("./router");
var requestHandlers = require("./handlers");

var handlers = {};
handlers["/"] = requestHandlers.impares;
handlers["/definaImpares"] = requestHandlers.definaImpares;
handlers["/oculto"] = requestHandlers.oculto;
handlers["/index.html"] = requestHandlers.impares;
handlers["/notfound"] = requestHandlers.naoEncontrado;




server.start(router, handlers);
