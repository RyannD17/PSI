idade = int(input("Qual a sua idade: "))

if idade >= 18:
    print("VC PODE ASSISTIR A ESSE CONTEÚDO!")

elif 15 < idade < 18:
    print("Tem que entrar com acompanhante, gld kkk")

    acompanhante = input("Vc tem acompanhante (S/N)? ")

    if acompanhante in "Ss":
        idade_acompanhante = int(input("Quantos anos ô caba tem? "))
        if idade_acompanhante >= 18:
            print("VCS PODEM ASSISTIR A ESSE CONTEÚDO!")

        elif idade_acompanhante < 18 and idade_acompanhante >=1:
            print("VCS Ñ PODEM ASSISTIR A ESSE CONTEÚDO! FDR")

        elif idade_acompanhante <= 0:
            print("Idade invalida!")

    elif acompanhante in "Nn":
        print("Vaza kskskks")

elif idade < 18 and idade >=1:
    print("VC Ñ PODE ASSISTIR A ESSE CONTEÚDO!")

elif idade <= 0:
    print("Idade invalida!")