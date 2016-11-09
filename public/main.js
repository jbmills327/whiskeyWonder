angular.module('Whiskey', [])
    .controller('whiskeyController', whiskeyController);

whiskeyController.$inject = ['whiskeyFactory'];

function whiskeyController(whiskeyFactory) {
    var whiskey = this;
    whiskey.new = [];
    whiskey.greeting = 'Welcome to WhiskeyWorld';
    whiskey.one = {};
    whiskey.data = whiskeyFactory;

    //     if (whiskey.data.length) {
    //         whiskey.whiskey.new = returnData.data;
    //     } else {
    //         whiskey.whiskey.one = returnData.data;
    //     }
    //     console.log('The whiskey is flowing..')
    // });

    console.log(whiskey.data);



}
