'use strict';

var BaseModel = require('../models/base');


module.exports = function (router) {

    var model = new BaseModel();

    router.get('/', function (req, res) {
        
        
        res.render('button', model);
        
        
    });

};
