var express = require("express");
var router = express.Router();
// CONTROLLERS
const usuarioController = require("../controller/usuarioController");
const tarefaController = require("../controller/tarefaController");

// -------------------- PRINCIPAL
router.get("/", function (req, res) {
  //   res.send("Bem vindo ao sistema Lista de tarefas");
  return res.json({ message: "Bem vindo ao sistema Lista de tarefas" });
});

// ##################### ROTAS USUÁRIOS #####################
// -------------------- CADASTRAR
router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate);

// -------------------- LISTAR
router.get("/usuarios/:id?", usuarioController.UsuarioListar);

// -------------------- UPDATE
router.put("/usuarios/:id", usuarioController.UsuarioUpdate);

// -------------------- DELETE
router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

// ##################### ROTAS TAREFAS #####################
// -------------------- CADASTRAR
router.post("/tarefas/Cadastrar", tarefaController.TarefaCreate);

// -------------------- LISTAR
router.get("/tarefas/:id?", tarefaController.TarefaListar);

// -------------------- UPDATE
router.put("/tarefas/:id", tarefaController.TarefaUpdate);

// -------------------- DELETE
router.delete("/tarefas/:id", tarefaController.TarefaDelete);

module.exports = router;
