/**
* Description of the module and the logic it provides
*
* @module cartridge/models/TrainingModule
*/

'use strict';
var pref = require('dw/system/Site');
var array = require('dw/util/ArrayList');
var Product = require('dw/catalog/ProductMgr');

var current = pref.getCurrent();
var Preferences = current.getCustomPreferenceValue('ProductID');
var a = function(){
    var al = new array();
	for (var i = 0; i < Preferences.length; i++) {
	     al.add(Product.getProduct(Preferences[i]))
    }
	return al;
	}
module.exports = a();
