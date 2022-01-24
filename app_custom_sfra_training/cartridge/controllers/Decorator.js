/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Decorator
*/

'use strict';
var server = require('server');
server.get('Header', function(req, res, next){
	res.render('rendering/category/catLanding1');
	next();
});
module.exports = server.exports();

