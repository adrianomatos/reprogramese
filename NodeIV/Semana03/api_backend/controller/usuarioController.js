// CRUD
const Usuario = require("../model/usuarioModel");

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
};
