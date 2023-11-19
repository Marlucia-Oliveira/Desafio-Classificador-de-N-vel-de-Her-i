// Desafio Classificador de Nivél Herói

let heroi = "Marlúcia"
let XP = 9000

if (XP <= 1000) {
    console.log("O Herói de Nome:" + heroi , "Está no Nível Ferro")
}
else if ((XP >= 1001) && (XP <= 2000)) {
    console.log("O Herói de Nome:" + heroi , "Está no Nível Bronze") 
}
else if ((XP >= 2001) && (XP <= 5000)) {
    console.log("O Herói de Nome:" + heroi , "Está no Nível Prata")  
}
else if ((XP >= 6001) && (XP <= 7000)) {
    console.log("O Herói de Nome:" + heroi , "Está no Nível Ouro")  
}
else if ((XP >= 7001) && (XP <= 8000)) {
    console.log("O Herói de Nome:" + heroi , "Está no Nível Platina")  
}
else if ((XP >= 8001) && (XP <= 9000)) {
    console.log("O Herói de Nome:" + heroi , "Está no Nível Ascendente") 
}
else if ((XP >= 9001) && (XP <= 10.000)) {
    console.log("O Herói de Nome:" + heroi , "Está no Nível Imortal")
}
else if (XP >= 10.001) {
    console.log("O Herói de Nome:" + heroi , "Está no Nível Radiante")
}

