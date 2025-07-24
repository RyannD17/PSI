function soma(valor1, valor2){

    if(typeof(valor1) === "number" && typeof(valor2) === "number"){
        const soma = valor1 + valor2

        verificar(900, 700)
        return soma} else {
            console.log("Essa soma não pode ocorrer")
        }
}

function verificar(soma){
    if(soma < 0){
        console.log("NEGATIVO")
    } else {
        console.log("POSITIVO")
    }
    
    return verificar
}

const resultadoFinal = soma("tiago", -200)