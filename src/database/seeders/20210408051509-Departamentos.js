'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {


        await queryInterface.bulkInsert('Departamentos', [{
            departamento: 'Amazonas',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Ancash',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Apurimac',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Arequipa',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Ayacucho',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Cajamarca',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Callao',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Cusco',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Huancavelica',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Huanuco',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Ica',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Junin',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'La Libertad',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Lambayeque',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Lima',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Loreto',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Madre de Dios',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Moquegua',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Pasco',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Piura',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Puno',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'San Martin',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Tacna',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Tumbes',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            departamento: 'Uacayali',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};