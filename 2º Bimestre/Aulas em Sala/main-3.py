from time import sleep
nome = input("Digite seu nome para a imersão, aluno(a): ")
print(f'''\nBem-vindo(a), {nome}, à sua calculadora virtual! 😁
Veremos se você teve - ou não - capacidade para concluir 🤔
  
    OBSERVAÇÃO:
    se a média entre as notas for igual ou maior que 6, PASSOOOUU! 🥸
    se a média entre as notas for menor que 6, mas for igual ou maior que 3, estará em RECUPERAÇÃO! 🫠
    se a média entre as notas for menor que 3, REPROVOU! 😭''')
nota_1 = float(input("\nDigite a nota do 1° Bimestre: "))
nota_2 = float(input("Digite a nota do 2° Bimestre: "))
nota_3 = float(input("Digite a nota do 3° Bimestre: "))
nota_4 = float(input("Digite a nota do 4° Bimestre: "))

media = (nota_1 + nota_2 + nota_3 + nota_4) / 4

print("Analisando sua média...")
for cont in range (3, 0, -1):
    print(cont)
    sleep(1)

if media >= 6:
    print(f"\nPARABÉNS, {nome}, com essa sua nota de {media}, VOCÊ PASSOOOUU! Boas férias 🤩")

elif 3 <= media < 6:
    print(f"\nOlha, {nome}, com essa sua nota de {media}, VOCÊ ESTÁ EM RECUPERAÇÃO! Boa sorte 🫡")

elif media < 3:
    print(f"\nSinto muito {nome}, com essa sua nota de {media}, VOCÊ REPROVOU! Melhore... 😑")