var assert = require('assert');
var getAverageProperty = require('../') 

var testArray = [ 
    { lowest: 21.4, highest: 26.7 },
    { lowest: 23.3, highest: 24.7 },
    { lowest: 21.3, highest: 23.6 } 
];

describe('Test the function', function () {
    it('should return 22', function () {
        assert.equal(getAverageProperty(testArray, 'lowest'), 22);
    });
    it('should return 25', function () {
        assert.equal(getAverageProperty(testArray, 'highest'), 25);
    });
});