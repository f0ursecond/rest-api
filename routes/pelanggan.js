var express = require("express");
const Validator = require("fastest-validator");
var router = express.Router();

const { Pelanggan } = require("../models");

const v = new Validator();

//GET

router.get("/", async (req, res) => {
  const tbpelanggan = await Pelanggan.findAll();
  return res.json(tbpelanggan);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const tbpelanggan = await Pelanggan.findByPk(id);
  return res.json(
    tbpelanggan || {
      message: "id tidak ditemukan",
    }
  );
});

//CREATE

router.post("/", async (req, res) => {
  const schema = {
    userid: "string",
    name: "string",
    alamat: "string",
    notelp: "string",
    stand_awal: "string",
    stand_akhir: "string",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const tbpelanggan = await Pelanggan.create(req.body);

  res.json(tbpelanggan);
});

//UPDATE

router.put("/:id", async (req, res) => {
  const id = req.params.id;

  let tbpelanggan = await Pelanggan.findByPk(id);
  if (!tbpelanggan) {
    return res.json({
      message: "pelanggan tidak ditemukan",
    });
  }

  const schema = {
    userid: "string|optional",
    name: "string|optional",
    alamat: "string|optional",
    notelp: "string|optional",
    stand_awal: "string|optional",
    stand_akhir: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }
  tbpelanggan = await tbpelanggan.update(req.body);
  res.json(tbpelanggan);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const tbpelanggan = await Pelanggan.findByPk(id);

  if (!tbpelanggan) {
    return res.json({
      message: "pelanggan tidak bisa ditemukan",
    });
  }
  await tbpelanggan.destroy();
  res.json({
    message: "pelanggan berhasil dihapus",
  });
});

module.exports = router;
