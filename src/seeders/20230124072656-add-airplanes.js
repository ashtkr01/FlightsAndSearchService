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
    await queryInterface.bulkInsert('Airplanes', [
      {
         modelNumber: 'Airbus A318',
         capacity: 132,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        modelNumber: 'Boeing 737NG',
        capacity: 162,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Boeing 737 MAX',
        capacity: 182,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Boeing 767',
        capacity: 216,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Embraer E-Jet E170',
        capacity: 124,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});

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
