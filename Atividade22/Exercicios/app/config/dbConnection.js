let sql = require ('mssql'); 
module.exports = function(){ 
    const sqlConfig = { 
    user: 'DS2612035', 
    password: 'GustaGol22', 
    database:'LP2', 
    server: 'APOLO', 
    options:{ 
    encrypt: false, 
    trustServerCertificate: true 
    } 
    } 
    return sql.connect(sqlConfig); 
}