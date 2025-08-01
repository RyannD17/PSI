nome = input("Digite seu nome para a imersão: ")
print(f"\nBem-vindo(a), {nome}, à sua calculadora virtual! 😁")
operacao = str(input('''\nOPERAÇÕES POSSÍVEIS
                     
      [+] Soma
      [-] Subtração
      [*] Multiplicação
      [/] Disivão

Qual operação vc deseja realizar (digite o símbolo de acordo como a operação)? '''))

if operacao == "+":
    print(f'''\nPerfeito, vamos realizar uma soma! 😎
Por favor, digite os dois valores que vc deseja somar, {nome}.''')
    num_1 = float(input("\nPrimeiro número: "))
    num_2 = float(input("Segundo número: "))
    soma = num_1 + num_2
    print(f"\nA soma entre os números {num_1} e {num_2} é {soma}. 😊")

elif operacao == "-":
    print(f'''\nPerfeito, vamos realizar uma subtração! 😎
Por favor, digite os dois valores que vc deseja subtrair, {nome}.''')
    num_1 = float(input("\nPrimeiro número: "))
    num_2 = float(input("Segundo número: "))
    sub = num_1 - num_2
    print(f"\nA subtração entre os números {num_1} e {num_2} é {sub}. 😊")

elif operacao == "*":
    print(f'''\nPerfeito, vamos realizar uma multiplicação! 😎
Por favor, digite os dois valores que vc deseja multiplicar, {nome}.''')
    num_1 = float(input("\nPrimeiro número: "))
    num_2 = float(input("Segundo número: "))
    mult = num_1 * num_2
    print(f"\nA multiplicação entre os números {num_1} e {num_2} é {mult}. 😊")

elif operacao == "/":
    print(f'''\nPerfeito, vamos realizar uma divisão! 😎
Por favor, digite os dois valores que vc deseja dividir, {nome}.''')
    num_1 = float(input("\nPrimeiro número: "))
    num_2 = float(input("Segundo número: "))
    if num_1 == 0 or num_2 == 0:
        print(f'''\nOlha {nome}, a divisão por zero não tem resultado definido na matemática, certo? 🥸
Portanto, a divisão entre {num_1} e {num_2} é INDEFINIDO! 😵''')

    else:
        div = num_1 / num_2
        print(f"\nA divisão entre os números {num_1} e {num_2} é {div}. 😊")