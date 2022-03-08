"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Mark",
        lastName: "Toney",
        email: "marktoney@gmail.com",
        password: bcrypt.hashSync("1234", 10),
        gender: "male",
      },
      {
        firstName: "Michael",
        lastName: "Antonio",
        email: "michaelantonio@gmail.com",
        password: bcrypt.hashSync("1234", 10),
        gender: "male",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@gmail.com",
        password: bcrypt.hashSync("1234", 10),
        gender: "female",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Users", null, {});
  },
};
