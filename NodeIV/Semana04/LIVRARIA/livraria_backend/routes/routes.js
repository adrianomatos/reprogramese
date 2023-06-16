var express = require("express");
var router = express.Router();
// CONTROLLERS
const funcionarioController = require("../controller/funcionarioController");
const livroController = require("../controller/livroController");

// ##################### PRINCIPAL #####################
router.get("/", function (req, res) {
  return res.json({ message: "Bem vindo ao Sistema de Livraria" });
});

// ##################### ROTA LOGIN #####################
router.post("/login", funcionarioController.FuncionarioVerificaLogin);

// ##################### ROTAS FUNCIONARIO #####################
// CADASTRAR
router.post("/funcionarios/Cadastrar", funcionarioController.FuncionarioCreate);

// LISTAR (COM VERIFICAÇÃO DE FUNCIONARIO USANDO JWT)
router.get(
  "/funcionarios/:id?",
  funcionarioController.verificaJWT,
  funcionarioController.FuncionarioListar
);

// UPDATE
router.put("/funcionarios/:id", funcionarioController.FuncionarioUpdate);

// DELETE
router.delete("/funcionarios/:id", funcionarioController.FuncionarioDelete);

// ##################### ROTAS LIVROS #####################
// CADASTRAR
router.post("/add_livros", livroController.LivroCreate);

// LISTAR
router.get("/livros/:id?", livroController.LivroListar);

// // ##################### ROTAS TAREFAS #####################
// // CADASTRAR
// router.post("/tarefas/Cadastrar", tarefaController.TarefaCreate);

// // LISTAR
// router.get("/tarefas/:id?", tarefaController.TarefaListar);

// // UPDATE
// router.put("/tarefas/:id", tarefaController.TarefaUpdate);

// // DELETE
// router.delete("/tarefas/:id", tarefaController.TarefaDelete);

module.exports = router;
