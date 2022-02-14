// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Pelanggan = sequelize.define(
    "Pelanggan",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      userid: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      notelp: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      stand_awal: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      stand_akhir: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "tbpelanggan",
    }
  );

  return Pelanggan;
};
