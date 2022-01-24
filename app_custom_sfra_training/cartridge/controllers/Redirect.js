/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Redirect
*/

'use strict';
var server = require('server');
server.get('Start', function(req, res, next){
	res.render('training/remote');
	next();
});
module.exports = server.exports();
