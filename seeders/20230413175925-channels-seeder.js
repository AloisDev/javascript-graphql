"use strict"

const { v4: uuid } = require("uuid")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Channels",
      [
        {
          id: uuid(),
          name: "General",
          slug: "general",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          name: "NodeJs",
          slug: "nodejs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          name: "Graphql",
          slug: "graphql",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Channels", null, {})
  },
}
