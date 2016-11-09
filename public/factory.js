angular.module('Whiskey')
    .factory('whiskeyFactory', whiskeyFactory);

whiskeyFactory.$inject = ['$http'];

function whiskeyFactory($http) {
    return [{
        name: 'Jim Beam',
        description: 'Kentucky Fried Whiskey',
        price: 20
    }, {
        name: 'Jack Daniels',
        description: 'Tennesse Syrup',
        price: 25
    }, {
        name: 'Makers Mark',
        description: 'Nectar of the Gods',
        price: 30
    }]
};
