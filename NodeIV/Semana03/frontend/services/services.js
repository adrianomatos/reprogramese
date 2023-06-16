// O arquivo services.js será responsável pelo processo de pegar os dados das views e enviar para a API e receber da API e retornar para as views.
const axios = require("axios");
const { response } = require("express");

module.exports = class Services {
  // CRIAR TAREFA
  static async TarefaCreate(req, res) {
    let valores = req.body;
    const options = {
      //URL da API
      url: "http://localhost:9443/tarefas/Cadastrar",
      //url: "https://apibackend.adrianomatos.repl.co/tarefas/Cadastrar",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro de tarefa realizado com sucesso";
    res.render("mensagem", { mensagem });
  }

  // LISTAR TAREFA
  static async TarefaListar(req, res) {
    const options = {
      //URL da API
      url: "http://localhost:9443/tarefas",
      //url: "https://apibackend.adrianomatos.repl.co/tarefas",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const tarefa = response.data;
      res.render("tarefas/listar", { tarefa });
    });
  }

  //ATUALIZAR TAREFA
  static async TarefaUpdate(req, res) {
    let valores = req.body;
    const options = {
      url: "http://localhost:9443/tarefas/" + valores.id_tarefa,
      //url: "https://apibackend.adrianomatos.repl.co/tarefas/" + valores.id_tarefa,
      method: "PUT",
      data: valores,
    };
    axios(options);
    const mensagem = "Registro atualizado com sucesso";
    res.render("mensagem", { mensagem });
  }

  //DELETAR TAREFA
  static async TarefaDelete(req, res) {
    let id_tarefa = req.body.id_tarefa;
    const options = {
      url: "http://localhost:9443/tarefas/" + id_tarefa,
      //url: "https://apibackend.adrianomatos.repl.co/tarefas/" + id_tarefa,
      method: "DELETE",
    };
    axios(options);
    const mensagem = "Tarefa excluída com sucesso!";
    res.render("mensagem", { mensagem });
  }

  // #####################################################################
  // CRIAR USUÁRIO
  static async UsuarioCreate(req, res) {
    let valores = req.body;
    const options = {
      //URL da API
      url: "http://localhost:9443/usuarios/Cadastrar",
      //url: "https://apibackend.adrianomatos.repl.co/usuarios/Cadastrar",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro de usuário realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  // LISTAR USUÁRIO
  static async UsuarioListar(req, res) {
    const options = {
      //URL da API
      url: "http://localhost:9443/usuarios",
      //url: "https://apibackend.adrianomatos.repl.co/usuarios",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const tarefa = response.data;
      res.render("usuarios/listar", { tarefa });
    });
  }

  //ATUALIZAR USUÁRIO
  static async UsuarioUpdate(req, res) {
    let valores = req.body;
    const options = {
      url: "http://localhost:9443/usuarios/" + valores.id_usuario,
      //url: "https://apibackend.adrianomatos.repl.co/usuarios/" + valores.id_usuario,
      method: "PUT",
      data: valores,
    };
    axios(options);
    const mensagem = "Usuário atualizado com sucesso";
    res.render("mensagem", { mensagem });
  }

  //DELETAR USUÁRIO
  static async UsuarioDelete(req, res) {
    let id_usuario = req.body.id_usuario;
    const options = {
      url: "http://localhost:9443/usuarios/" + id_usuario,
      //url: "https://apibackend.adrianomatos.repl.co/usuarios/" + id_usuario,
      method: "DELETE",
    };
    axios(options);
    const mensagem = "Usuário excluído com sucesso!";
    res.render("mensagem", { mensagem });
  }
};
