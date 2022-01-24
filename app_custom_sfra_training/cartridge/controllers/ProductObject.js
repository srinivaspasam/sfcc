/**
* Description of the Controller and the logic it provides
*
* @module  controllers/ProductObject
*/


'use strict';
var server = require('server');
var Product = require('dw/catalog/ProductMgr');
var ArrayList=require('dw/til/ArrayList');
server.get('Show', function(req, res, next){
var al=new ArrayList();
	al.add(Product.getProduct('P2620'));
	al.add(Product.getProduct('P2620-1'));
	al.add(Product.getProduct('P2620-2'));
	res.render('training/productObject',{al:al});
	next();
});
module.exports = server.exports();
