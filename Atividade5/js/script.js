let menorIdade = Infinity;
let maiorIdade = 0;
let totalidade = 0;

let pessimo = 0;
let bom = 0;
let otimo = 0;

let homem = 0;
let mulher = 0;
let outros = 0;

for (let i = 1; i <= 45; i++) {
    let age = Number(prompt("Digite a idade:"));
    let sexo = prompt("Digite o sexo (M/F/O):").toUpperCase();
    let opiniao = Number(prompt("Opinião (1 = péssimo, 2 = regular, 3 = bom, 4 = ótimo):"));

    totalidade += age;

    if (age > maiorIdade) maiorIdade = age;
    if (age < menorIdade) menorIdade = age;

    if (opiniao === 1) pessimo++;
    if (opiniao === 3) bom++;
    if (opiniao === 4) otimo++;

    if (sexo === "M") homem++;
    else if (sexo === "F") mulher++;
    else outros++;
}

let media = totalidade / 45;
let porcentagemOtimoBom = ((otimo + bom) / 45) * 100;

alert(
`Média: ${media}
Maior idade: ${maiorIdade}
Menor idade: ${menorIdade}
Péssimo: ${pessimo}
Porcentagem ótimo/bom: ${porcentagemOtimoBom}%
Homens: ${homem}
Mulheres: ${mulher}
Outros: ${outros}`
);