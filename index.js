var server = require("./server");
var router = require("./router");
var requestHandlers = require("./handlers");

var handlers = {};
<<<<<<< HEAD
handlers["/"] = requestHandlers.impares;
handlers["/definaImpares"] = requestHandlers.definaImpares;
=======
handlers["/"] = requestHandlers.oculto;
>>>>>>> 0390f785f413efb3456fdda0ab74330db9a14d52
handlers["/oculto"] = requestHandlers.oculto;
handlers["/index.html"] = requestHandlers.impares;
handlers["/notfound"] = requestHandlers.naoEncontrado;




server.start(router, handlers);
