'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Opens', {
        opensId: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
            },
            minclassnm: {
            type: Sequelize.STRING,
            allowNull: false,
            },
            svcstatnm: {
            type: Sequelize.STRING,
            allowNull: false,
            },
            svcnm: {
            type: Sequelize.STRING,
            allowNull: false,
            },
            placenm: {
            type: Sequelize.STRING,
            allowNull: false,
            },
            svcurl: {
            type: Sequelize.STRING,
            allowNull: false,
            },
            x: {
            type: Sequelize.STRING,
            allowNull: false,
            },
            y: {
            type: Sequelize.STRING,
            allowNull: false,
            },
            areanm: {
            type: Sequelize.STRING,
            allowNull: false,
            },
            imgurl: {
            type: Sequelize.STRING,
            allowNull: false,
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
            },
            updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
            },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Opens');
  }
};