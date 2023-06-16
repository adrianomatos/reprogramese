// CRUD
const Usuario = require("../model/usuarioModel");
// JSONWEBTOKEN
const jwt = require("jsonwebtoken");

module.exports = class usuarioController {
  // CREATE
  static async UsuarioCreate(req, res) {
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;

    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
    };
    await Usuario.create(usuario);
    res.json({
      message:
        "Usuario cadastrado com sucesso! Foram inseridos os seguintes dados",
      dados: usuario,
    });
  }

  // READ
  static async UsuarioListar(req, res) {
    // Se tiver parâmetro p/ busca por id
    const id_usuario = req.params.id;
    if (id_usuario) {
      const usuario = await Usuario.findOne({
        where: { id_usuario: id_usuario },
      });
      res.json(usuario);
    } else {
      const usuario = await Usuario.findAll({ raw: true });
      res.json(usuario);
    }
  }

  // UPDATE
  static async UsuarioUpdate(req, res) {
    const id_usuario = req.params.id;
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
    };
    await Usuario.update(usuario, { where: { id_usuario: id_usuario } });
    res.json({
      message:
        "Usuario atualizado com sucesso! Foram atualizados os seguintes dados",
      dados: usuario,
    });
  }

  // DELETE
  static async UsuarioDelete(req, res) {
    const id_usuario = req.params.id;
    await Usuario.destroy({ where: { id_usuario: id_usuario } });
    res.json({ message: "Usuario excluído com sucesso!" });
  }

  // TRATAMENTO DA SESSÃO
  static async UsuarioVerificaLogin(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;
    const dados = {
      email: email,
      senha: senha,
    };
    const usuario = await Usuario.findOne({
      where: { email: email, senha: senha },
    }).then((usuario) => {
      //esse teste abaixo deve ser feito no seu banco de dados
      if (usuario != undefined) {
        const id = usuario.id_usuario; //esse id vira do seu banco de dados
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300, // expira em 5min
        });
        return res.json({ auth: true, token: token }); //Criação do token
      } else {
        res.status(402).json({ message: "Erro ao logar no sistema." });
      }
    });
  }

  // VERIFICA SE O TOKEN FOI CRIADO
  static async verificaJWT(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token)
      return res
        .status(401)
        .json({ auth: false, message: "Nenhum token criado." });
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err)
        return res
          .status(500)
          .json({ auth: false, message: "Falha na autenticação com o token." });

      // Salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  }
};
