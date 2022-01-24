/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Training2
*/

'use strict';
var server = require('server');
server.get('Test', function(req, res, next){
var k=request.httpCookies['RequestUrl'].value;
res.render('training/cookie1',{al:k});
	next();
});
module.exports=server.exports();

