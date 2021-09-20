'use strict';

const models = require('../../models')
const User = models.User
const Chat = models.Chat
const ChatUser = models.ChatUser
const Message = models.Message

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

    const users = await User.findAll({ limit: 5 })

    const chat = await Chat.create()

    await ChatUser.bulkCreate([
      {
        clubId: chat.id,
        userId: users[0].id
      },
      {
        clubId: chat.id,
        userId: users[1].id
      },
    ])

    await Message.bulkCreate([
      {
        message: 'Hello',
        clubId: chat.id,
        fromUserId: users[0].id
      },
      {
        message: 'Hiiii',
        clubId: chat.id,
        fromUserId: users[1].id
      },
      {
        message: 'How are you doing?',
        clubId: chat.id,
        fromUserId: users[0].id
      },
      {
        message: 'Very well, what about you?',
        clubId: chat.id,
        fromUserId: users[1].id
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
