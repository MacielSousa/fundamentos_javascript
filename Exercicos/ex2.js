const anosEmDias =  function(ano){
    let bissexto = Math.ceil(ano/4);
    if(bissexto){
        return ((ano - 6) * 365) + (6 * 366);
    }
}

console.log(anosEmDias(70));
