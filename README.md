# get-average-property
A module to get average for a value in an array of objects.

[![Build Status](https://travis-ci.org/cedced19/average-property.svg?branch=master)](https://travis-ci.org/cedced19/average-property)

## Usage
```javascript
var getAverageProperty = require('get-average-property');
getAverageProperty(data, value);
```
where `data` is an array of objects, and `value` is a property.

## Example

```javascript
var array = [ 
    { lowest: 21.4, highest: 26.8 },
    { lowest: 23.3, highest: 24.7 },
    { lowest: 21.3, highest: 23.6 } 
];
getAverageProperty(array, 'lowest');
```

It will return: `66`