'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('text_to_speech', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: true
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('text_to_speech')
  }
};
