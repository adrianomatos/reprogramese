const express = require("express");
const Services = require("../services/services");
const router = express.Router();

// *** PRINCIPAL(LISTAR)
router.get("/", Services.LivroListar);

// *** FORM. LOGIN
router.get("/login", (req, res) => {
  res.render("funcionarios/login");
});

// FUNÇÃO LOGIN
router.post("/login", Services.FuncionarioLogin);

// ########################################## LIVROS
// *** FORM. CADASTRAR
router.get("/livros/cadastrar", (req, res) => {
  res.render("livros/cadastrar");
});

// *** FUNÇÃO CADASTRAR
router.post("/livros/Cadastrar", Services.LivroCreate);

// *** LISTAR
router.get("/livros/listar", Services.LivroListar);

// ########################################## FUNCIONÁRIOS
// *** FORM CADASTRAR
router.get("/funcionarios/cadastrar", (req, res) => {
  res.render("funcionarios/cadastrar");
});
// *** FUNÇÃO CADASTRAR
router.post("/funcionarios/cadastrar", Services.FuncionarioCreate);

// // -------------------- LISTAR
// // ROTA PARA SERVIÇO LISTAR
// router.get("/funcionarios/listar", Services.FuncionarioListar);

// // -------------------- UPDATE
// // ROTA PARA O FORMULARIO EDITAR
// router.get(
//   "/funcionarios/Atualizar/:id_usuario/:nome/:email/:senha",
//   (req, res) => {
//     let funcionarios = {
//       id_usuario: req.params.id_usuario,
//       nome: req.params.nome,
//       email: req.params.email,
//       senha: req.params.senha,
//     };
//     res.render("funcionarios/update", { funcionarios });
//   }
// );
// // ROTA PARA SERVIÇO UPDATE
// router.post("/funcionarios/Update", Services.FuncionarioUpdate);

// // -------------------- DELETE
// //ROTA PARA O SERVIÇO DE DELETE
// router.post("/funcionarios/Delete", Services.FuncionarioDelete);

// // ########################################## ROTAS TAREFAS
// // -------------------- CADASTRAR
// router.get("/tarefas/cadastrar", (req, res) => {
//   res.render("tarefas/cadastrar");
// });
// // ROTA PARA SERVIÇO CREATE
// router.post("/tarefas/Create", Services.TarefaCreate);

// // -------------------- LISTAR
// // ROTA PARA SERVIÇO LISTAR
// router.get("/tarefas/listar", Services.TarefaListar);

// // -------------------- UPDATE
// // ROTA PARA O FORMULARIO EDITAR
// router.get("/tarefas/Atualizar/:id_tarefa/:titulo/:descricao", (req, res) => {
//   let tarefas = {
//     id_tarefa: req.params.id_tarefa,
//     titulo: req.params.titulo,
//     descricao: req.params.descricao,
//   };
//   res.render("tarefas/update", { tarefas });
// });
// // ROTA PARA SERVIÇO UPDATE
// router.post("/tarefas/Update", Services.TarefaUpdate);

// // -------------------- DELETE
// //ROTA PARA O SERVIÇO DE DELETE
// router.post("/tarefas/Delete", Services.TarefaDelete);

module.exports = router;
