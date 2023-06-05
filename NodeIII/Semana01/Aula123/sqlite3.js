// npm install sqlite3
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("empresa.sqlite", (err) => {
  if (err) {
    return console.error(err.message);
  } else {
    console.log("Banco 'empresa.sqlite' conectado com sucesso!");

    // // CREATE
    // db.run("CREATE TABLE setor(idsetor int, nome varchar(40), ramal varchar(4), email varchar(30))");
    // db.run("CREATE TABLE funcionario(matricula int primary key, idsetor int not null, nome varchar(40), nascimento date, telefone varchar(15))");

    // // INSERT
    // db.run("INSERT INTO setor(idsetor, nome, ramal, email) VALUES (1, 'MULHER', '1000', 'MULHER@SEMUJIDF.COM')");
    // db.run("INSERT INTO setor(idsetor, nome, ramal, email) VALUES (2, 'JUVENTUDE', '2000', 'JUVENTUDE@SEMUJIDF.COM')");
    // db.run("INSERT INTO setor(idsetor, nome, ramal, email) VALUES (3, 'IDOSO', '3000', 'IDOSO@SEMUJIDF.COM')");
    // db.run("INSERT INTO setor(idsetor, nome, ramal, email) VALUES (4, 'DROGAS', '4000', 'DROGAS@SEMUJIDF.COM')");
    // db.run("INSERT INTO setor(idsetor, nome, ramal, email) VALUES (5, 'FAMILIA', '5000', 'FAMILIA@SEMUJIDF.COM')");

    // db.run("INSERT INTO funcionario(matricula, idsetor, nome, nascimento, telefone) VALUES (1234, 3, 'Adriano Matos', '18-02-1986', '88981935976')");
    // db.run("INSERT INTO funcionario(matricula, idsetor, nome, nascimento, telefone) VALUES (1111, 2, 'Rafael Mota', '12-12-2000', '88999887766')");
    // db.run("INSERT INTO funcionario(matricula, idsetor, nome, nascimento, telefone) VALUES (2222, 1, 'Euda', '07-02-1986', '88999887755')");
    // db.run("INSERT INTO funcionario(matricula, idsetor, nome, nascimento, telefone) VALUES (3333, 3, 'Suzy', '08-01-1986', '88999887744')");
    // db.run("INSERT INTO funcionario(matricula, idsetor, nome, nascimento, telefone) VALUES (4444, 4, 'Helder', '06-01-1980', '88999887733')");
    // db.run("INSERT INTO funcionario(matricula, idsetor, nome, nascimento, telefone) VALUES (5555, 5, 'Emilia', '17-02-1978', '88999887722')");
    // db.run("INSERT INTO funcionario(matricula, idsetor, nome, nascimento, telefone) VALUES (6666, 2, 'Tamyres', '27-02-1986', '88999887711')");
    // db.run("INSERT INTO funcionario(matricula, idsetor, nome, nascimento, telefone) VALUES (7777, 1, 'Sthefanye', '07-02-1996', '88999887700')");

    // SELECT
    db.each("SELECT matricula, nome FROM funcionario", (err, row) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(row.matricula + " - " + row.nome);
      }
    });

  }
});
