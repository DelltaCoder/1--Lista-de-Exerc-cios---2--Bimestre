import keyboard as kb

while True:
    nr1 = int(input('Digite um Número... '))

    resposta = (nr1 % 2)

    if resposta == 1:
        print('Impar!')
    else:
        print('Par!')