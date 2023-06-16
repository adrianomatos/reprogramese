// O arquivo services.js será responsável pelo processo de pegar os dados das views e enviar para a API e receber da API e retornar para as views.
const axios = require("axios");
const { response } = require("express");

module.exports = class Services {
  //------------------------------VERIFICAR FUNCIONARIO
  static async FuncionarioLogin(req, res) {
    let valores = req.body;
    const options = {
      //URL da API
      //url: "http://localhost:9443/login",
      //----->>>>>> url: "http://localhost:9443/funcionarios/login",
      url: "https://livrariabackend.adrianomatos.repl.co/login",
      method: "POST",
      data: valores,
    };
    axios(options).then((funcionario) => {
      if (funcionario != undefined) {
        return res.render("logado");
      }
    });
  }

  // #####################################################################
  // CRIAR LIVRO
  static async LivroCreate(req, res) {
    let valores = req.body;
    const options = {
      //URL da API
      //url: "http://localhost:9443/add_livros",
      url: "https://livrariabackend.adrianomatos.repl.co/add_livros",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //LISTAR
  static async LivroListar(req, res) {
    const options = {
      //URL da API
      //url: "http://localhost:9443/livros",
      url: "https://livrariabackend.adrianomatos.repl.co/livros",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const livro = response.data;
      res.render("livros/listar", { livro });
    });
  }

  // #####################################################################
  // CRIAR FUNCIONARIO
  static async FuncionarioCreate(req, res) {
    let valores = req.body;
    const options = {
      //URL da API
      //url: "http://localhost:9443/funcionarios/Cadastrar",
      url: "https://livrariabackend.adrianomatos.repl.co/funcionarios/Cadastrar",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro de funcionário realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  // // LISTAR FUNCIONARIO
  // static async FuncionarioListar(req, res) {
  //   const options = {
  //     //URL da API
  //     url: "http://localhost:9443/funcionarios",
  //     //url: "https://livrariabackend.adrianomatos.repl.co/funcionarios",
  //     method: "GET",
  //     data: {},
  //   };
  //   axios(options).then((response) => {
  //     console.log(response.data);
  //     const tarefa = response.data;
  //     res.render("funcionarios/listar", { tarefa });
  //   });
  // }

  // //ATUALIZAR FUNCIONARIO
  // static async FuncionarioUpdate(req, res) {
  //   let valores = req.body;
  //   const options = {
  ////URL da API
  //     url: "http://localhost:9443/funcionarios/" + valores.id_funcionario,
  //     //url: "https://livrariabackend.adrianomatos.repl.co/funcionarios/" + valores.id_funcionario,
  //     method: "PUT",
  //     data: valores,
  //   };
  //   axios(options);
  //   const mensagem = "Usuário atualizado com sucesso";
  //   res.render("mensagem", { mensagem });
  // }

  // //DELETAR FUNCIONARIO
  // static async FuncionarioDelete(req, res) {
  //   let id_funcionario = req.body.id_funcionario;
  //   const options = {
  ////URL da API
  //     url: "http://localhost:9443/funcionarios/" + id_funcionario,
  //     //url: "https://livrariabackend.adrianomatos.repl.co/funcionarios/" + id_funcionario,
  //     method: "DELETE",
  //   };
  //   axios(options);
  //   const mensagem = "Usuário excluído com sucesso!";
  //   res.render("mensagem", { mensagem });
  // }

  // #####################################################################
  // // CRIAR TAREFA
  // static async TarefaCreate(req, res) {
  //   let valores = req.body;
  //   const options = {
  //     //URL da API
  //     url: "http://localhost:9443/tarefas/Cadastrar",
  //     //url: "https://livrariabackend.adrianomatos.repl.co/tarefas/Cadastrar",
  //     method: "POST",
  //     data: valores,
  //   };
  //   axios(options);
  //   const mensagem = "Cadastro de tarefa realizado com sucesso";
  //   res.render("mensagem", { mensagem });
  // }

  // // LISTAR TAREFA
  // static async TarefaListar(req, res) {
  //   const options = {
  //     //URL da API
  //     url: "http://localhost:9443/tarefas",
  //     //url: "https://livrariabackend.adrianomatos.repl.co/tarefas",
  //     method: "GET",
  //     data: {},
  //   };
  //   axios(options).then((response) => {
  //     console.log(response.data);
  //     const tarefa = response.data;
  //     res.render("tarefas/listar", { tarefa });
  //   });
  // }

  // //ATUALIZAR TAREFA
  // static async TarefaUpdate(req, res) {
  //   let valores = req.body;
  //   const options = {
  ////URL da API
  //     url: "http://localhost:9443/tarefas/" + valores.id_tarefa,
  //     //url: "https://livrariabackend.adrianomatos.repl.co/tarefas/" + valores.id_tarefa,
  //     method: "PUT",
  //     data: valores,
  //   };
  //   axios(options);
  //   const mensagem = "Registro atualizado com sucesso";
  //   res.render("mensagem", { mensagem });
  // }

  // //DELETAR TAREFA
  // static async TarefaDelete(req, res) {
  //   let id_tarefa = req.body.id_tarefa;
  //   const options = {
  ////URL da API
  //     url: "http://localhost:9443/tarefas/" + id_tarefa,
  //     //url: "https://livrariabackend.adrianomatos.repl.co/tarefas/" + id_tarefa,
  //     method: "DELETE",
  //   };
  //   axios(options);
  //   const mensagem = "Tarefa excluída com sucesso!";
  //   res.render("mensagem", { mensagem });
  // }
};
