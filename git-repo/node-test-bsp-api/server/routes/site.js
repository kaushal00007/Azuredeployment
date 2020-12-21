const express = require('express');
const request = require('request');
const cryptojs = require('crypto-js');
const log4js = require('log4js');
const CONSTANTS = require('../../constants.js');
const config = require('../config/config.json');
const ping = require('ping');
const common = require('./common');

const router = express.Router();

log4js.configure('./server/config/log4js.json');
var log = log4js.getLogger('site');
var log_level = config.LOG_LEVEL;
log.logLevel = log_level;
const generateXMLFileforItems = require('../pricebook/generateXML.js').generateXMLFileforItems;
const pushFileToDrive = require('../pricebook/fileTransfer.js').pushFileToDrive;
const zipFile = require('../pricebook/zip.js');
//Get the details of the site for a given enterprise/Site ID.
  router.get('/site/sites/:id', common.authToken, async (req, res, next) => {
    try {
      console.log('in Site Site API');
     var queryParams = '/' + req.params.id;
      request.get(
        common.setParams(
          CONSTANTS.METHOD_TYPES.GET,
         CONSTANTS.BSP.API_ENDPOINTS.SITE_SERVICE.GET_SITES + queryParams
        ),
        function (err, response, body) {
          console.log('Sites: ' + JSON.stringify(response));
          res.json(body);
        }
      );
    } catch (e) {
      log.error(`Error :${e}`);
      next(e);
    }
  });
 
router.get(
	'/site/sites/:id/:pattern',
	common.authToken,
	async (req, res, next) => {
	  try {
		console.log('in Site status API');
		var queryParams =
		  '/' + req.params.id + '?customAttributes=' + req.params.pattern;
		request.get(
		  common.setParams(
			CONSTANTS.METHOD_TYPES.GET,
			CONSTANTS.BSP.API_ENDPOINTS.SITE_SERVICE.GET_SITES + queryParams
		  ),
		  function (err, response, body) {
			var result = {};
			if(body) {
				result = JSON.parse(body);
			}
			console.log('Sites: ' + JSON.stringify(response));
			var status = result.customAttributeSets;
			//console.log(status);
			//getting the computerName for the Site
			for(var i = 0; i<4; i++){
				//console.log(status[0].attributes[i].value);
				if(status[0].attributes[i].key == "computername")
				{
				  var host = status[0].attributes[i].value;
				}
			}
			//console.log(status);

			//var host = status[0].attributes[3].value;
			console.log(host);
			ping.sys.probe(host, function(isAlive){
				var msg = isAlive ? 'Online' : 'Offline';
				//console.log(msg);
			// Assigning the status of ping in response
			for(var i = 0; i<4 && ( msg == 'Online'); i++){
				//console.log(status[0].attributes[i].value);
				if(status[0].attributes[i].key == "online-offline")
				    status[0].attributes[i].value = msg;
			}
			console.log(msg);
			//console.log(result) ;

			var resbody = {
				"Site Name": result.siteName,
				"status": msg};
			res.send(resbody );
			});
			

		  }
		);
	  } catch (e) {
		log.error(`Error :${e}`);
		next(e);
	  }
	}
  );


module.exports = router;
