// Questão 1

    // function saudar(nome) {
    //     return `Olá, ${nome}! Seja muito bem-vindo(a)!`
    // }

    // let nome = prompt("Digite seu nome: ")
    // console.log(saudar(nome))


// Questão 2

    // function executarOperacao(num_1, num_2, callback) {
    //     return callback(num_1, num_2)
    // }

    //Aqui é o nosso "callback" (uma função "inferior", pois a função principal é a de executarOperacao, bem dizer)
    // let num_1 = parseInt(prompt("Digite um número: "))
    // let num_2 = parseInt(prompt("Digite outro número: "))

    //Esses valores "a, b" são apenas parâmetros prontos para receber os valores. O "a" recebe num_1 e o "b" o outro
    // const soma = (a, b) => a + b
    // const mult = (a, b) => a * b

    // console.log(`A soma entre ${num_1} e ${num_2} é igual a ${executarOperacao(num_1, num_2, soma)}.`)
    // console.log(`A multiplicação entre ${num_1} e ${num_2} é igual a ${executarOperacao(num_1, num_2, mult)}.`)


// Questão 3

    // function exibirMensagem(nome, callback) {
    //     return callback(nome)
    // }

    // function saudar(nome) {
    //     return `Seja muito bem-vindo(a), ${nome}!`
    // }

    // function despedir(nome) {
    //     return `Até logo, ${nome}!`
    // }

    //Meu callback
    // let nome = prompt("Opa, perdão o incômodo, mas... qual o seu nome? ")

    //Retornando minhas duas funções que acabei de criar para receber "nome", dado pelo callback
    // console.log(saudar(nome))
    // console.log(despedir(nome))


// Questão 4

    // function verificarNumero() {
    //Para uma Promise - feita do zero - dizemos new Promise
    //     return new Promise((resolve, reject) => {
    //         if (num >= 0) {
    //             resolve(`Número válido: ${num}`)
    //         } else {
    //             reject("Erro: número negativo não é permitido.")
    //         }
    //     })
    // }
    //Meu callback 
    // let num = parseInt(prompt("Digite um número: "))

    // verificarNumero(num)
    //     .then((msg) => { //O uso do ".then" é o método do Promise que dá certo
    //         console.log(msg) //Essa parte "msg" é um parâmetro para que de fato a mensagem seja printada "Número válido: ${num}"
    //     })
    //     .catch((msg) => { //O uso do ".catch" é o método do Promise que dá errado
    //         console.log(msg)
    //     })

    //O "resolve" e o "reject" são, respectivamente: "deu certo", "deu errado"


// Questão 5

    // function consultarPaciente(nome) {
    //     return new Promise((resolve, reject) => {
    //         if (!nome) {
    //             reject("Erro: nome do paciente não pode ser vazio.")
    //         } else {
    //             resolve(`Consulta para ${nome} agendada com sucesso.`)
    //         }
    //     })
    // }

    // let nome = prompt("Bem-vindo(a), paciente! Por favor, digite seu nome para analisarmos sua consulta: ")
    // 
    // consultarPaciente(nome)
    //     .then((msg) => { //O uso das setas "=>" é como se eu estivesse escrevendo uma função mais curta...
    //         console.log(msg)
    //     })
    //     .catch((msg) => {
    //         console.log(msg)
    //     })


// Questão 6

    //function consultarPaciente(nome) {
    //    return new Promise((resolve, reject) => {
    //        if (!nome) {
    //            reject("Erro: nome do paciente não pode ser vazio.")
    //        } else {
    //            resolve(`Consulta para ${nome} agendada com sucesso.`)
    //        }
    //    })
    //}

    //let nome = prompt("Bem-vindo(a), paciente! Por favor, digite seu nome para analisarmos sua consulta: ")

    //async function agendarConsulta(nome) {
    //    try {
    //        let msg = await consultarPaciente(nome)
    //        console.log(msg) // se der crt
    //    } catch (erro) {
    //        console.log(erro) // se der errado
    //    }
    //}

    //agendarConsulta(nome)

    // O "async" é para retornar uma função; "agendarConsulta" recebe o nome, onde ele vai conferir algum erro - assim como o .then - e imprime a mensagem que deixei na minha condicional através do parâmetro msg. Show?
    // O "await" espera o resultado de outra Promise como se fosse um valor normal, sem precisar usar .then()
    // O uso do try analisa se há algum erro na digitação. Se haver, ele imprime o que tem no else através do parâmetro "erro". Se não, imprime o que tem no if através do parâmetro "msg"


// Questão 7

    //function verificarHorario(atualHora) {
    //    return new Promise((resolve, reject) => {
    //        if (typeof atualHora !== "number" || atualHora < 0 || atualHora > 23) {
    //            reject("Erro: hora inválida.")
    //        } else if (atualHora >= 8 && atualHora < 17) {
    //            resolve("Estamos abertos para atendimento.")
    //        } else {
    //            reject("Estamos fechados no momento.")
    //        }
    //    })
    //}

    //let atualHora = parseInt(prompt("Opa, tudo bem cliente? Desculpa, mas estou sem meu relógio agora... pode me dizer que    //horas são? "))

    //async function checarAtendimento(hora) {
    //    try {
    //        let msg = await verificarHorario(hora)
    //        console.log(msg)
    //    } catch (erro) {
    //        console.log(erro)
    //    }
    //}

    //checarAtendimento(atualHora)

    //A variável "hora" que criei é apenas um parâmetro que além de analisar a resposta da "atualHora", ela varre toda minha função "verificarHorario". Em outras palavras, ela não se limita só a resposta, mas a toda função.