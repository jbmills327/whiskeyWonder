angular.module('Whiskey', [])
    .controller('whiskeyController', whiskeyController);

whiskeyController.$inject = ['whiskeyFactory'];


function whiskeyController(whiskeyFactory) {
    var whiskey = this;
    whiskey.new = [];
    whiskey.greeting = 'Welcome to WhiskeyWorld';
    whiskey.one = {};
    whiskey.cart = [];
    whiskeyFactory.getWhiskey('')
        .then(function gotWhiskey(res) {

            console.log(res);
            whiskey.data = res.data;
        })
        .catch(function noWhiskey(err) {
            console.error(err);
        });

    whiskey.addToCart = function addToCart(item) {
        var index = whiskey.cart.findIndex(function findIt(e) {
            console.log("e: ", e._id, "item: ", item._id)
            if (e._id === item._id) {
                return true;
            } else {
                return false;
            }
        });
        console.log("The index is: ", index);

        if (index === -1) {
            item.count = 1;
            whiskey.cart.push(item);

        } else {
            whiskey.cart[index].count += 1;
        }

    }
    console.log(whiskey.data);



}
