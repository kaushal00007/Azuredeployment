"use strict";
exports.__esModule = true;
var request = require('request');
var cryptojs = require('crypto-js');
var CONSTANTS = require('./constants.js');

var org = CONSTANTS.BSP.API_PARAMS.ORGANIZATION;
var contentType = "application/json";
var date;
var token;

authToken();

function authToken(){
	request.post(setParams(CONSTANTS.METHOD_TYPES.POST, CONSTANTS.BSP.API_ENDPOINTS.AUTHENTICATE), function (e, r, body) {
		var res = JSON.parse(body);
		console.log("authToken :"+JSON.stringify(res, null, 4));
		token = res.token;
		getCats();
	});
}

function getCats(){
	request.get(setParams(CONSTANTS.METHOD_TYPES.GET, CONSTANTS.BSP.API_ENDPOINTS.GET_CAT_ITEMS), function (e, r, body) {
		var res = JSON.parse(body);
		console.log("getCats "+JSON.stringify(res, null, 4));
	});
}

function setParams(type, path){
	return {headers: buildHeaders(type, path), url: buildURL(path),method: type}
}

function buildHeaders(type, path){
	var headers = {
		'nep-organization': org,
		'Authorization': generateAuth(type, path),
		'Date': date,
		'Content-Type':contentType
	};
	return headers;
}

function generateAuth(method, path){
	if(token){
		return "Bearer " + token;
	}
	var time = isoTime();
	var oneTimeSecret = CONSTANTS.BSP.API_PARAMS.SECRET_KEY + time;
	var toSign = method + "\n" + path;

	if(contentType) {
		toSign += "\n" + contentType.trim();
	}
	if(org) {
		toSign += "\n" + org.trim();
	}
	
	var key = cryptojs.HmacSHA512(toSign, oneTimeSecret);
	var accessKey = "AccessKey " + CONSTANTS.BSP.API_PARAMS.SHARED_KEY + ":" + cryptojs.enc.Base64.stringify(key);
	console.log("accessKey :"+accessKey);
	
	return accessKey;
}

function isoTime() {
    var d = new Date();
    d.setMilliseconds(0);
	date = d.toUTCString();
    return d.toISOString();
}

function buildURL(path){
	var url = CONSTANTS.BSP.API_PARAMS.BASE_URL + path;
	console.log("API URL :"+url);
	return url;
}