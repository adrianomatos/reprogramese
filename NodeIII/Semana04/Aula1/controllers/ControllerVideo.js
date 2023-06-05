const Video = require("../models/Video");

// Carrega VIEW (Cadastrar.handlebars)
module.exports = class VideoController {
  static cadastrarVideo(req, res) {
    res.render("videos/Cadastrar");
  }

  // CREATE
  static async VideoCreate(req, res) {
    const video = {
      autor: req.body.autor,
      titulo: req.body.titulo,
      assunto: req.body.assunto,
      descricao: req.body.descricao,
      link: req.body.link,
    };
    await Video.create(video);
    //res.send("Cadastro realizado com sucesso!");
    res.redirect("/");
  }

  // READ - Carrega VIEW (listar.handlebars)
  static async listarVideos(req, res) {
    const video = await Video.findAll({ raw: true });
    res.render("videos/listar", { video });
  }

  //UPDATE - Carrega VIEW (update.handlebars)
  static async UpdateVideo(req, res) {
    const id_video = req.params.id_video;
    const video = await Video.findOne({
      where: { id_video: id_video },
      raw: true,
    });
    res.render("videos/update", { video });
  }

  //UPDATE
  static async VideoUpdate(req, res) {
    const id_video = req.body.id_video;
    const video = {
      autor: req.body.autor,
      titulo: req.body.titulo,
      assunto: req.body.assunto,
      descricao: req.body.descricao,
      link: req.body.link,
    };
    await Video.update(video, { where: { id_video: id_video } });
    res.redirect("/");
  }

  // DELETE
  static async removerVideo(req, res) {
    const id_video = req.body.id_video;
    await Video.destroy({ where: { id_video: id_video } });
    res.redirect("/");
  }
};
