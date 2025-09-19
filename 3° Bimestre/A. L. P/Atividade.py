# QUESTÃO 1
    #print("Bem-vindo à camara de voto!")
    #idade = int(input("Qual a sua idade? "))
    #print()

    #if idade < 16:
    #    print("Ops! Vc não tem a devida idade para votar, tente próximo ano - rsrsrs.")

    #elif idade == 16 or idade == 17 or idade > 70:
    #    print("Seu voto é opicional.")

    #elif 18 <= idade <= 70:
    #    print("Seu voto é obrigatório!")


# QUESTÃO 2
    #print("Bem-vindo à sua tabuada!")
    #num = int(input("Digite um número entre 1 e 10 para multiplicá-lo: "))

    #if 1 <= num <= 10:
    #    print(f"\nTabuada de {num}:")
    #    print()

    #    for i in range(1, 11):
    #        mult = (f"{num} x {i} = {num * i}")
    #        print(mult)

    #else:
    #    print("Ops! Não podemos multiplicá-lo...")


# QUESTÃO 3
print("Bem-vindo ao sua conversor de temperatura!")
opc = int(input('''Deseja converter de...
                
[ 1 ] Graus -- Fahrenheit
[ 2 ] Fahrenheit -- Graus
                
Digite o número correspondente!
                
OPÇÃO: '''))
print()

if opc == 1:
    graus = float(input("Perfeito! Digite a quantidade em graus para convertê-lo em fahrenheit: "))