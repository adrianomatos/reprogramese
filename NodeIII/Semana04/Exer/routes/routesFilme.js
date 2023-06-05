const express = require("express");
const controllerFilme = require("../controllers/controllerFilme");
const router = express.Router();

router.get("/Cadastrar", controllerFilme.cadastrarFilme);
router.post("/Cadastrar", controllerFilme.FilmeCreate);

router.get("/", controllerFilme.listarFilmes);

router.get("/update/:id_filme", controllerFilme.UpdateFilme);
router.post("/update", controllerFilme.FilmeUpdate);

router.post("/remover", controllerFilme.removerFilme);

module.exports = router;
