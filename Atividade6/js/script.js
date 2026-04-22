let a = Number(prompt("Digite o valor de A: "))
let b = Number(prompt("Digite o valor de B: "))
let c = Number(prompt("Digite o valor de C: "))

if (isNaN(a) || isNaN(b) || isNaN(c) || a<=0 || b<=0 || c<=0){
    alert("Valores inválidos")
}

else {
    if (Math.abs(b - c) < a && a < b + c && Math.abs(a - c) < b && b < a + c && Math.abs(a - b) < c && c < a + b) {
        if (a === b && b === c) {
            alert("Equilátero");
        } else if (a === b || a === c || b === c) {
            alert("Isósceles");
        } else {
            alert("Escaleno");
        }
    }
    else {
        alert("Não forma um triângulo")
    }
}