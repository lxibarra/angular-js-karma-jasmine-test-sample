angular.module('exampleApp').factory("counterService", function () {
    var counter = 0;
    return {
        incrementCounter: function () {
            counter++;
        },
        getCounter: function() {
            return counter;
        }
    }
});