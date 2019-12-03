'use strict';

first()
    .then(second)
    .then(resultOfSecond => console.log(resultOfSecond));
