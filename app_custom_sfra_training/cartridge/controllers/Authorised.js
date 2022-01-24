/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Authorised
*/

'use strict';
var server = require('server');
var URLUtils = require('dw/web/URLUtils');
server.get('Start',function(req, res, next){
	if(customer.isAuthenticated()){
		res.json({
			'Message':'User Authorised'
		});
	}
	else{
		res.redirect(URLUtils.url('Login-Show'));
	}
	res.json();
	next();
});
module.exports = server.exports();

