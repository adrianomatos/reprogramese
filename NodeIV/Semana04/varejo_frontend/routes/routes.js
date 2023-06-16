const express = require("express");
const Services = require("../services/services");
const router = express.Router();

// *** PRINCIPAL(LISTAR)
router.get("/", Services.ProdutoListar);

// *** FORM. LOGIN
router.get("/login", (req, res) => {
  res.render("usuarios/login");
});

// FUNÇÃO LOGIN
router.post("/login", Services.UsuarioLogin);

// ########################################## PRODUTOS
// *** FORM. CADASTRAR
router.get("/produtos/cadastrar", (req, res) => {
  res.render("produtos/cadastrar");
});

// *** FUNÇÃO CADASTRAR
router.post("/produtos/cadastrar", Services.ProdutoCreate);

// *** LISTAR
router.get("/produtos/listar", Services.ProdutoListar);

// ########################################## USUÁRIOS
// *** FORM CADASTRAR
router.get("/usuarios/cadastrar", (req, res) => {
  res.render("usuarios/cadastrar");
});
// *** FUNÇÃO CADASTRAR
router.post("/usuarios/cadastrar", Services.UsuarioCreate);

// // -------------------- LISTAR
// // ROTA PARA SERVIÇO LISTAR
// router.get("/usuarios/listar", Services.UsuarioListar);

// // -------------------- UPDATE
// // ROTA PARA O FORMULARIO EDITAR
// router.get(
//   "/usuarios/Atualizar/:id_usuario/:nome/:email/:senha",
//   (req, res) => {
//     let usuarios = {
//       id_usuario: req.params.id_usuario,
//       nome: req.params.nome,
//       email: req.params.email,
//       senha: req.params.senha,
//     };
//     res.render("usuarios/update", { usuarios });
//   }
// );
// // ROTA PARA SERVIÇO UPDATE
// router.post("/usuarios/Update", Services.UsuarioUpdate);

// // -------------------- DELETE
// //ROTA PARA O SERVIÇO DE DELETE
// router.post("/usuarios/Delete", Services.UsuarioDelete);

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
