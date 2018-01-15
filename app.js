const Converter = require('csvtojson').Converter;

var csv2json = new Converter({constructResult:false});

var readStream = require('fs').createReadStream('./customer-data.csv');
var writeSteam = require('fs').createWriteStream('customer-data.json');

readStream.pipe(csv2json).pipe(writeSteam);




