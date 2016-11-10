angular.module('Whiskey')
    .factory('whiskeyFactory', whiskeyFactory);

whiskeyFactory.$inject = ['$http'];

function whiskeyFactory($http) {
    return {
        getWhiskey: function(bottleId) {
            bottleId = bottleId ? '/' + bottleId : '';
            return $http.get('/api/getWhiskey' + bottleId);
        }
    }
};
