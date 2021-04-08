'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Provincia', [{
                provincia: 'Chachapoyas',
                idDepa: 1
            },
            {
                provincia: 'Bagua',
                idDepa: 1
            },
            {
                provincia: 'Bongara',
                idDepa: 1
            },
            {
                provincia: 'Condorcaqui',
                idDepa: 1
            },
            {
                provincia: 'Luya',
                idDepa: 1
            },
            {
                provincia: 'Rodriguez de Mendoza',
                idDepa: 1
            },
            {
                provincia: 'Utcubamba',
                idDepa: 1
            },
            {
                provincia: 'Huaraz',
                idDepa: 2
            }, {
                provincia: 'Aija',
                idDepa: 2
            }, {
                provincia: 'Antonio Raymondi',
                idDepa: 2
            }, {
                provincia: 'Asuncion',
                idDepa: 2
            }, {
                provincia: 'Bolognesi',
                idDepa: 2
            }, {
                provincia: 'Carhuaz',
                idDepa: 2
            }, {
                provincia: 'Carlos Fermin Fitzcarrald',
                idDepa: 2
            }, {
                provincia: 'Casma',
                idDepa: 2
            }, {
                provincia: 'Corongo',
                idDepa: 2
            }, {
                provincia: 'Huari',
                idDepa: 2
            }, {
                provincia: 'Huarmey',
                idDepa: 2
            }, {
                provincia: 'Huaylas',
                idDepa: 2
            }, {
                provincia: 'Mariscal Luzuriaga',
                idDepa: 2
            }, {
                provincia: 'Ocros',
                idDepa: 2
            }, {
                provincia: 'Pallasca',
                idDepa: 2
            }, {
                provincia: 'Pomobamba',
                idDepa: 2
            }, {
                provincia: 'Recuay',
                idDepa: 2
            }, {
                provincia: 'Santa',
                idDepa: 2
            }, {
                provincia: 'Sithuas',
                idDepa: 2
            }, {
                provincia: 'Yungay',
                idDepa: 2
            }

            , {
                provincia: 'Abancay',
                idDepa: 3
            }, {
                provincia: 'Andahuaylas',
                idDepa: 3
            }, {
                provincia: 'Antamba',
                idDepa: 3
            }, {
                provincia: 'Aymaraes',
                idDepa: 3
            }, {
                provincia: 'Cotobambas',
                idDepa: 3
            }, {
                provincia: 'Chincheros',
                idDepa: 3
            }, {
                provincia: 'Grau',
                idDepa: 3
            }, {
                provincia: 'Arequuipa',
                idDepa: 4
            }, {
                provincia: 'Camana',
                idDepa: 4
            }, {
                provincia: 'Caraveli',
                idDepa: 4
            }, {
                provincia: 'Castilla',
                idDepa: 4
            }, {
                provincia: 'Caylloma',
                idDepa: 4
            }, , {
                provincia: 'Condesuyos',
                idDepa: 4
            }, {
                provincia: 'Islay',
                idDepa: 4
            }, {
                provincia: 'La Union',
                idDepa: 4
            }, {
                provincia: 'Huamanga',
                idDepa: 5
            }, {
                provincia: 'Cangallo',
                idDepa: 5
            }, {
                provincia: 'Cangallo',
                idDepa: 5
            }, {
                provincia: 'Huanca Santos',
                idDepa: 5
            }, {
                provincia: 'Huanta',
                idDepa: 5
            }, {
                provincia: 'La Mar',
                idDepa: 5
            }, {
                provincia: 'Lucanas',
                idDepa: 5
            }, {
                provincia: 'Parinacochas',
                idDepa: 5
            }, {
                provincia: 'Paucar del Sara Sara',
                idDepa: 5
            }, {
                provincia: 'Sucre',
                idDepa: 5
            }, {
                provincia: 'Victor Fajardo',
                idDepa: 5
            }, {
                provincia: 'Vicas Huaman',
                idDepa: 5
            }, {
                provincia: 'Cajamarca',
                idDepa: 6
            }, {
                provincia: 'Cajabamba',
                idDepa: 6
            }, {
                provincia: 'Calendin',
                idDepa: 6
            }, {
                provincia: 'Chota',
                idDepa: 6
            }, {
                provincia: 'Contumaza',
                idDepa: 6
            }, {
                provincia: 'Cutervo',
                idDepa: 6
            }, {
                provincia: 'Hualgayoc',
                idDepa: 6
            }, {
                provincia: 'Jaen',
                idDepa: 6
            }, {
                provincia: 'San Ignacio',
                idDepa: 6
            }, {
                provincia: 'San Marcos',
                idDepa: 6
            }, {
                provincia: 'San Pablo',
                idDepa: 6
            }, {
                provincia: 'Santa Cruz',
                idDepa: 6
            }, {
                provincia: 'Callao',
                idDepa: 7
            }, {
                provincia: 'Cusco',
                idDepa: 8
            }, {
                provincia: 'Acomayo',
                idDepa: 8
            }, {
                provincia: 'Anta',
                idDepa: 8
            }, {
                provincia: 'Calca',
                idDepa: 8
            }, {
                provincia: 'Canas',
                idDepa: 8
            }, {
                provincia: 'Canchis',
                idDepa: 8
            }, {
                provincia: 'Chumvilcas',
                idDepa: 8
            }, {
                provincia: 'Espinar',
                idDepa: 8
            }, {
                provincia: 'La convencion',
                idDepa: 8
            }
        ], {});
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