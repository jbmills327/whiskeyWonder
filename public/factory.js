angular.module('Whiskey')
    .factory('whiskeyFactory', whiskeyFactory);

whiskeyFactory.$inject = ['$http'];

function whiskeyFactory($http) {
    return {
        getWhiskey: function(bottleId) {
            bottleId = bottleId ? '/' + bottleId : '';
            return $http.get('/api/getWhiskey' + bottleId);
        },
        createWhiskey: function(newWhiskey) {
            console.log('We created a fuckin whiskey');
            return $http.post('/api/createWhiskey', newWhiskey);
        },
        changeWhiskey: function(editWhiskey) {
            console.log('We changed a fuckin whiskey');
            return $http.put('/api/editWhiskey', editWhiskey);
        }
    }
};
