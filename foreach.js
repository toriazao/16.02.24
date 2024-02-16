var tempoFilme = 60; // em segundos
var inicioFilme = 0; // em segundos

    for (var t = 0; t < tempoFilme; t++) {
        setTimeout(function() {
            console.clear();
            console.log("assistindo filme 60 segundos... Ainda faltam [" + (tempoFilme - inicioFilme) + "] segundos.");
            inicioFilme++;
        },t*1000)
    }