/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Training2
*/

'use strict';
var server = require('server');

server.get('Test', function(req, res, next){
	res.render('training/content');
	next();
});
module.exports=server.exports();

