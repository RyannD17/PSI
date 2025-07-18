let trigos = 100; //o resto da divisão será o quanto sobrou de uma divisão comum --- por exemplo (33 x 3 = 99) para chegar a 100, falta apenas 1 número, e assim por diante.
let lotes = 3;

let resto_da_divisão = trigos % lotes;

console.log("O valor total vai ser: " + resto_da_divisão)

// let x = “algo”;: Variável usada para no futuro o usuário inserir algo nela (como por exemplo, atribui o valor 100 à minha variável "trigos")
// x = num ou “texto”;: Variáveis em Javascript (neste caso, minhas variáveis aí são "trigos", "lotes" e "resto_da_divisão")