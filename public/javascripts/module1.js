var makeCounter = function () {
    var count = 0;
    
    return function () {
        count = count + 1;
        return count;
    };
};

var counter = makeCounter();
var counter2 = makeCounter();
