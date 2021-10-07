function resposta(data){
    var resposta;
    if (data == "sim"){
        resposta = "Ae, vamos adorar sua presença!"
    } else if (data == "nao") {
        resposta = "Poxa, que pena! Sentiremos sua falta"
    }
    document.getElementById("resposta").innerHTML = resposta
    console.log(resposta);
}