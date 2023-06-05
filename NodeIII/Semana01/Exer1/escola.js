const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("empresa.sqlite", (err) => {
  if (err) {
    return console.error(err.message);
  } else {
    console.log("Banco 'escola.sqlite' conectado com sucesso!");

    // CREATE
    // db.run(
    //   "CREATE TABLE aluno(matricula int primary key, nome varchar(60), email varchar(40), cidade varchar(60))"
    // );

    // INSERT
    // db.run(
    //   "INSERT INTO aluno(matricula, nome, email, cidade) VALUES (123, 'Adriano Matos', 'adrianotaua@hotmail.com', 'Tauá -> Fortaleza')"
    // );
    // db.run(
    //   "INSERT INTO aluno(matricula, nome, email, cidade) VALUES (456, 'Júnior Matos', 'juninho@gmail.com', 'Tauá')"
    // );
    // db.run(
    //   "INSERT INTO aluno(matricula, nome, email, cidade) VALUES (789, 'Rebeca Sales', 'rebs@icloud.com', 'Fortaleza')"
    // );

    // SELECT
    db.each("SELECT matricula, nome FROM aluno", (err, row) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(row.matricula + " - " + row.nome);
      }
    });

  }
});
