var {setDefaultTimeout} = require('cucumber');
//we can change this to a param and change value per env
setDefaultTimeout(60 * 1000);

function pause(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}