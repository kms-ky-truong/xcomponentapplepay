'use strict';


module.exports = function (router) {

    router.post('/', function (req, res) {
        
        
        res.status(200).send(JSON.stringify('Charged successfully'));
        
        
    });

};
