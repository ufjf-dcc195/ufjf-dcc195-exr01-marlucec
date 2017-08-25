var qs = require("querystring");
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
function naoEncontrado(req, res){
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.write("Recurso não encontrado!");
  res.end();
}


exports.oculto = oculto;


exports.naoEncontrado = naoEncontrado;
