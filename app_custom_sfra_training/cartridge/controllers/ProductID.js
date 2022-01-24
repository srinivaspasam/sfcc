/**
* Description of the Controller and the logic it provides
*
* @module  controllers/ProductID
*/

'use strict';
var server = require('server');
var mod = require('../models/TrainingModule.js');
server.get('Product',function(req, res, next){
	res.render('training/productID',{mod1:mod});
	next();
});
module.exports=server.exports();
