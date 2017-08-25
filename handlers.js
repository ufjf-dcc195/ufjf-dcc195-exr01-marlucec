var qs = require("querystring");

var var01 = require("querystring");
var var02 = require("querystring");
function impares(req, res){
//console.log ("Numeros impares de 1 a 100");
res.writeHead(200, {"Content-Type": "text/html"});
res.write("<p> Para imprimir numeros primos acesse: http://localhost:8888/definaImpares </p>");
res.write("<p> Para autenticacao de senha acesse:  http://localhost:8888/oculto</p>");
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


function oculto(req, res){
  if(req.method == "GET"){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Digite a senha?</h1>");
    res.write("<form method=post>");
    res.write("<input type=text name=senha />");
    res.write("<input type=submit />");
    res.write("</form>");
    res.end();
  } else {
    var body = '';
    req.on('data', function( data) {
      body += data;
    });
    req.on('end', function() {
      var dados = qs.parse(body);
      console.log(dados);
      res.writeHead(200, {"Content-Type": "text/html"});
      if(dados.senha=="54321")
      {res.write("<h1>Acertou!</h1>");}
      else{
      res.write("<p> Não autorizado!</p>");
      }
      res.end();
    })

  }
}


function intervalo(req, res){
  if(req.method == "GET"){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<form method=post>");


    res.write("<h1>Digite o primeiro valor inteiro: </h1>");
      res.write("<input type=text name=valor01 />");
          res.write("<h1>Digite o segundo valor inteiro: </h1>");
    res.write("<input type=text name=valor02 />");

    res.write("<input type=submit />");
    res.write("</form>");
    res.end();
  } else {
    var body = '';
    req.on('data', function( data) {
      body += data;
    });
    req.on('end', function() {
      var dados1 = var01.parse(body);
      var dados2 = var02.parse(body);
      console.log(dados1,dados2);
      res.writeHead(200, {"Content-Type": "text/html"});
      if(dados1.valor01<dados2.valor02)
      {
        res.write("O intervalo dos valores inseridos são:");
        for(var i=dados1.valor01; i<=dados2.valor02;i++)
        {
              res.write(" "+i+" ");
        }

      }else if(dados1.valor01>dados2.valor02){
        res.write("O intervalo dos valores inseridos são:");
        for(var i=dados2.valor02; i<=dados1.valor01;i++)
        {
              res.write(" "+i+" ");
        }
      }
      res.end();
    })

  }
}


function naoEncontrado(req, res){
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.write("Recurso não encontrado!");
  res.end();
}


exports.impares = impares;
exports.definaImpares = definaImpares;
exports.oculto = oculto;
exports.intervalo = intervalo;
exports.naoEncontrado = naoEncontrado;
