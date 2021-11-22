"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("applicant", {
      applicantid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lunchid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'lunchs',
            key: 'lunchid',
          },
      },
      userid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'userid',
          },
      },
      confirmed: {
        allowNull: true,
        type: Sequelize.BOOLEAN, 
      },
      comments:{
        allowNull: true,
        type: Sequelize.STRING,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("applicant");
  },
};
