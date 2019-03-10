const mysql 	 = require('mysql');
const connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'cacic'
});

module.exports = () =>{
	console.log('Modulo Banco de Dados carregado!');
	return connection;
}