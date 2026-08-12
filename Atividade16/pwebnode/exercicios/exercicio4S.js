const fs = require('fs'); //carregando módulo filesystem
const data = fs.readFileSync('file.txt');
// a execução é bloqueada aqui at´pe o arquivo ser lido
console.log(data.toString());