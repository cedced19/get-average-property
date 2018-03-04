module.exports = function  (array, property) {
    for (var i = 0, sum = 0, l = array.length; i < l; ++i) {
        sum += array[i][property];
    }
    return sum / l;
}