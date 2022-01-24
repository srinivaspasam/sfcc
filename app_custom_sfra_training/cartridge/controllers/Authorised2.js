/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Authorised2
*/

'use strict';
var server = require('server');
var Auth=require('*/cartridge/scripts/middleware/userLoggedIn');
server.get('Start', Auth.validateLoggedIn, function(req, res, next){
	res.json({
	   'message': "Logged in Customer"
	});
	next();
});
module.exports = server.exports();
