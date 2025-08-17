// Questão 1
    // console.log("Bem-vindo(a)!!")


// Qustão 2

    // let nome = "Boku's"
    // console.log(`Olá, ${nome}!`)

    // const nome = "Boku's"
    // console.log(`Olá, ${nome}!`)

// Questão 3 [SOMA]

    // let farinha = 9;
    // let batata = 10;

    // let soma = farinha + batata;

    // console.log("O valor total da soma vai ser: " + soma)


// Questão 3 [SUBTRAÇÃO]

    // let coca_cola = 12;
    // let pespi = 2;

    // let subtração = coca_cola - pespi;

    // console.log("O valor total da subtração vai ser: " + subtração)


// Questão 3 [MULTPLICAÇÃO]

    // let arroz = 1000;
    // let fardo = 10;

    // let multiplicação = arroz * fardo;

    // console.log("O valor total da multiplicação vai ser: " + multiplicação)


// Questão 3 [DIVISÃO]

    // let trigos = 1000;
    // let lotes = 10;

    // let divisão = trigos / lotes;

    // console.log("O valor total da divisão vai ser: " + divisão)


// Questão 3 [RESTO DA DIVISÃO]

    // let ketchup = 100;
    // let maionese = 3;

    // let resto_da_divisão = ketchup % maionese;

    // console.log("O resto da divisão vai ser: " + resto_da_divisão)


// Questão 4

    // let num = parseInt(prompt("Digite um número: "));

    // if (num % 2 === 0) {
    //   console.log(`O número ${num} é par.`)
    // } else {
    //   console.log(`O número ${num} é ímpar.`)
    // }


// Questão 5

    // let hora = parseInt(prompt("Por favor, diga-me que horas são (digite apenas o número): "))

    // if (hora >= 0 && hora < 6) {
    //     console.log(`São ${hora}hrs?? Pois bem... Boa madrugada!`)
    // } else if (hora >= 6 && hora < 12) {
    //     console.log(`São ${hora}hrs?? Pois bem... Bom dia!`)
    // } else if (hora >= 12 && hora < 18) {
    //     console.log(`São ${hora}hrs?? Pois bem... Boa tarde!`)
    // } else if (hora >= 18 && hora < 24) {
    //     console.log(`São ${hora}hrs?? Pois bem... Boa noite!`)
    // } else {
    //     console.log(`Oxx... E ${hora} virou horário agora??`)
    // }


// Questão 6

    // let num = [1, 4, 3, 9, 8, 6, 5, 7, 2, 0]
    // let pares = []
    // let impares = []

    // for (let i = 0; i < num.length; i++) { // Estou dizendo que: variável i = 0, pois ela se refere ao índice (pois 0 é inicial) / num.// length conta os elementos do array, ou seja, total é 10. Já o i++ quer dizer i + 1, que em outras palavras, ele vai passando de um em // um a cada índice.
    //     if (num[i] % 2 === 0) {
    //         pares.push(num[i]) // O push é usado para adicionar algo no final do array, ou seja, ele vai ler o número e vai sempre // adicionando ao final como uma fila.
    //     } else {
    //       impares.push(num[i])
    //     }
    // }

    // console.log("Números pares:", pares)
    // console.log("Números ímpares:", impares)

    
// Questão 7

    // function quadrado(num) {
    //     return num ** 2
    // }

    // let num = parseInt(prompt("Digite um número para elevá-lo ao quadrado: "))
    // resultado = quadrado(num)

    // console.log(`O número ${num} elevado ao quadrado é igual a ${resultado}.`)


// Questão 8

    // let num = [9, 6, 17, 0, 13, 10, 14, 7, 8, 11]

    // let maiores = []
    // let menores = []

    // for (let i = 0; i < num.length; i++) {
    //     if (num[i] > 10) {
    //         maiores.push(num[i])
    //     } else {
    //         menores.push(num[i])
    //     }
    // }

    // console.log("Números maiores que 10:", maiores)
    // console.log("Números menores ou iguais a 10:", menores)


// Questão 9

    // console.log("Bem-vindo(a) ao nosso 'Festival Junino de Mossoró'!")
    
    // let idade = parseInt(prompt("Antes de prosseguir, informe sua idade para personalizarmos uma experiência de acordo   com sua faixa // etária: "))
    
    // if (idade > 0 && idade <= 12) {
    //     console.log(`Somente ${idade} anos... Marrapais! Venha, vou designá-lo(a) para o seu local.`)
    // } else if (idade >= 13 && idade < 18) {
    //     console.log(`${idade} anos, tempo bão da adolescência! Venha, vou designá-lo(a) para o seu local.`)
    // } else if (idade >= 18 && idade < 60) {
    //     console.log(`${idade} anos, né? Venha, vou designá-lo(a) para o seu local.`)
    // } else if (idade >= 60 && idade < 120) {
    //     console.log(`Na terceira idade, não há um melhor momento que seus ${idade} anos para se festejar! Venha, vou     designá-lo(a) para o // seu local.`)
    // } else if (idade >= 120) {
    //     console.log("Eita, danado! Por acaso cê é um defunto? Vá até o final da fila, sô.")
    // } else {
    //     console.log(`Oxente! ${idade} anos? Isso lá é idade, criatura? Vá até o final da fila, sô.`)
    // }


// Questão 10

    // function atraso(callback) {
    //     console.log("Esperando 3 segundos...")

    //     setTimeout(() => {
    //         callback()
    //         console.log("Tudo pronto, vamos?")
    //     }, 3000);
    // }

    // function finalizado() {
    //     console.log("Perfeito! Callback finalizado com sucesso!")
    // }

    // atraso(finalizado)