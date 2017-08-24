function impares(req, res){
//console.log ("Numeros impares de 1 a 100");
res.writeHead(200, {"Content-Type": "text/html"});
res.write("<p> imprimir numeros primos!</p>");
res.end();
}

function definaImpares(req, res){
  res.writeHead(200, {"Content-Type": "text/html"});
  for(var i=1; i<=100; i++)
  {
    if(i%2!=0)
  //  console.log(i);

    res.write("<p> Olá você é um numero primo "+i+"!</p>");

  }
  res.end();
}
function naoEncontrado(req, res){
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.write("Recurso não encontrado!");
  res.end();
}


exports.impares = impares;
exports.definaImpares = definaImpares;

exports.naoEncontrado = naoEncontrado;
