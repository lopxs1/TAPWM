let jogador1 = prompt("Escolha: pedra, papel ou tesoura");

if (!jogador1) {
    console.log("Jogo cancelado");
} else {
    jogador1 = jogador1.toLowerCase();

    let opcoes = ["pedra", "papel", "tesoura"];
    let maquina = opcoes[Math.floor(Math.random() * 3)];

    if (!opcoes.includes(jogador1)) {
        console.log("Escolha inválida!");
    } else {
        console.log("Você:", jogador1);
        console.log("Máquina:", maquina);

        if (jogador1 === maquina) {
            alert("Você: " + jogador1 + "\nMáquina: " + maquina + "\nEmpate!");
        } else if (
            (jogador1 === "pedra" && maquina === "tesoura") ||
            (jogador1 === "papel" && maquina === "pedra") ||
            (jogador1 === "tesoura" && maquina === "papel")
        ) {
            alert("Você: " + jogador1 + "\nMáquina: " + maquina + "\nVocê venceu!");
        } else {
            alert("Você: " + jogador1 + "\nMáquina: " + maquina + "\nVocê perdeu!");
        }
    }
}