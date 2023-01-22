'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name: 'Netaji Subhash Chandra Bose International Airport',
      cityId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chennai International Airport',
      cityId: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sardar Vallabh Bhai Patel International Airport',
      cityId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Guru Ram Dass Jee International Airport',
      cityId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lokpriya Gopinath Bordoloi International Airport',
      cityId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
