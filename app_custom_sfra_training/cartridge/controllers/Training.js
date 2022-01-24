/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Training
*/




'use strict';
var server = require('server');
var k=require('dw/util/ArrayList');
server.get('Show', function(req, res, next){
	var al=new k();
	al.add(5);
	al.add(6);
	al.add(7);
	al.add(8);              
	res.render('training/training1',{al:al});
	next();
});
module.exports=server.exports();

