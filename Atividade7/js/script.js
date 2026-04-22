function maior(){
    let x = Number(prompt("Digite um número: "))
    let y = Number(prompt("Digite outro número: "))
    let z = Number(prompt("Digite outro número: "))

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        alert("Digite apenas números válidos");
        return;
    }

    else{
        if (x >= y && x >= z) {
            alert(x + " é o maior valor");
        } else if (y >= x && y >= z) {
            alert(y + " é o maior valor");
        } else {
            alert(z + " é o maior valor");
        }
    }
}

function ordenar(){
    let a = Number(prompt("Digite o primeiro número:"));
    let b = Number(prompt("Digite o segundo número:"));
    let c = Number(prompt("Digite o terceiro número:"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Digite apenas números válidos");
        return;
    }

    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);

    alert("Ordem crescente: " + numeros.join(", "));
}

function palindromo(){
    let texto = prompt("Digite uma palavra ou frase:");

    if (!texto) {
        alert("Entrada inválida");
        return;
    }

    let tratado = texto
        .toLowerCase()
        .replace(/\s+/g, "");

    let invertido = tratado.split("").reverse().join("");

    if (tratado === invertido) {
        alert("É um palíndromo");
    } else {
        alert("Não é um palíndromo");
    }
}

let opcao = Number(prompt(
    "Escolha uma opção:\n" +
    "1 - Maior número\n" +
    "2 - Ordenar números\n" +
    "3 - Verificar palíndromo"
));

if (isNaN(opcao)) {
    alert("Digite um número válido");
} else {
    switch (opcao) {
        case 1:
            maior();
            break;
        case 2:
            ordenar();
            break;
        case 3:
            palindromo();
            break;
        default:
            alert("Opção inválida");
    }
}