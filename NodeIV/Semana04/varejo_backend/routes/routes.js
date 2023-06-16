var express = require("express");
var router = express.Router();
// CONTROLLERS
const usuarioController = require("../controller/usuarioController");
const produtoController = require("../controller/produtoController");

// ##################### PRINCIPAL #####################
router.get("/", function (req, res) {
  return res.json({ message: "Bem vindo ao Sistema de Varejo" });
});

// ##################### ROTA LOGIN #####################
router.post("/login", usuarioController.UsuarioVerificaLogin);

// ##################### ROTAS USUÁRIOS #####################
// CADASTRAR
router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate);

// LISTAR (COM VERIFICAÇÃO DE USUÁRIO USANDO JWT)
router.get(
  "/usuarios/:id?",
  usuarioController.verificaJWT,
  usuarioController.UsuarioListar
);

// UPDATE
router.put("/usuarios/:id", usuarioController.UsuarioUpdate);

// DELETE
router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

// ##################### ROTAS PRODUTOS #####################
// CADASTRAR
router.post("/add_produtos", produtoController.produtoCreate);

// LISTAR
router.get("/produtos/:id?", produtoController.ProdutoListar);

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
