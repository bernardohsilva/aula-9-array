//1)0


nomes = ["Cleber", "Jorge", "Claudio", "Sandro", "Paulo",]

for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

//2)

salários = ["2.500", "3.000", "2.750", "5.000", "4.370", "3.900", "5.200", "7.000"]

for (let i = 0; i < salários.length; i++){
    console.log(salários[i])
}

//3)

lista = [false, true, false, true]
console.log(lista);

//4)

Salarios = ['4000$', '3000$', '2000$', '4320$']

for ( let i = 0; i < Salarios.length; i++){
    console.log(Salarios[i])
}

//5)

produtos = [1000, 2000]

lista = [produtos[0], produtos[0] * 0.05, produtos[1], produtos[1] * 0.05]
console.log(lista);

//6)

x1 = Math.floor(Math.random() * 9)
y1 = Math.floor(Math.random() * 9)
z1 = Math.floor(Math.random() * 9)
matriz1 = [x1, y1, z1]
x2 = Math.floor(Math.random() * 9)
y2 = Math.floor(Math.random() * 9)
z2 = Math.floor(Math.random() * 9)
matriz2 = [x2, y2, z2]
x3 = Math.floor(Math.random() * 9)
y3 = Math.floor(Math.random() * 9)
z3 = Math.floor(Math.random() * 9)
matriz3 = [x3, y3, z3]

matrizP = [matriz1, matriz2, matriz3]
console.log(matrizP);


diagonalP1 = matrizP[0][0] *=2
diagonalP2 = matrizP[1][1] *=2
diagonalP3 = matrizP[2][2] *=2

console.log(`${diagonalP1}, ${diagonalP2}, ${diagonalP3}`);

//7)


x1 = Math.floor(Math.random() * 25)
y1 = Math.floor(Math.random() * 25)
matriz1 = [x1, y1]

x2 = Math.floor(Math.random() * 25)
y2 = Math.floor(Math.random() * 25)
matriz2 = [x2, y2]

matrizP = [matriz1, matriz2]
console.log(matrizP);

determinante1 = matrizP[1][1] * matrizP[0][0]
determinante2 = matrizP[1][0] * matrizP[0][1]
determinante = determinante1 - determinante2
console.log(determinante);