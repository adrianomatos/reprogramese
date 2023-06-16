// CRUD
const Tarefa = require("../model/tarefaModel");

module.exports = class tarefaController {
  // CREATE
  static async TarefaCreate(req, res) {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    const tarefa = {
      titulo: titulo,
      descricao: descricao,
    };
    await Tarefa.create(tarefa);
    res.json({
      message:
        "Tarefa cadastrada com sucesso! Foram inseridos os seguintes dados",
      dados: tarefa,
    });
  }

  // READ
  static async TarefaListar(req, res) {
    // Se tiver parâmetro p/ busca por id
    const id_tarefa = req.params.id;
    if (id_tarefa) {
      const tarefa = await Tarefa.findOne({
        where: { id_tarefa: id_tarefa },
      });
      res.json(tarefa);
    } else {
      const tarefa = await Tarefa.findAll({ raw: true });
      res.json(tarefa);
    }
  }

  // UPDATE
  static async TarefaUpdate(req, res) {
    const id_tarefa = req.params.id;
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    const tarefa = {
      titulo: titulo,
      descricao: descricao,
    };
    await Tarefa.update(tarefa, { where: { id_tarefa: id_tarefa } });
    res.json({
      message:
        "Tarefa atualizada com sucesso! Foram atualizados os seguintes dados",
      dados: tarefa,
    });
  }

  // DELETE
  static async TarefaDelete(req, res) {
    const id_tarefa = req.params.id;
    await Tarefa.destroy({ where: { id_tarefa: id_tarefa } });
    res.json({ message: "Tarefa excluída com sucesso!" });
  }
};
