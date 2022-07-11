'use strict';

module.exports = {
  async up (queryInterface, DataTypes, _Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pageQuantity: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  },
};
