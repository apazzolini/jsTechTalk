var counter3 = (function () {
    var count = 0;
    
    return function () {
        count = count + 1;
        return count;
    };
}());
