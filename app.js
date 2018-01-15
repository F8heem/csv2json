const Converter = require('csvtojson').Converter;

var C2JConverter = new Converter({constructResult:false});
var ReadStream = require('fs').createReadStream("./customer-data.csv");
var WriteStream = require('fs').createWriteStream("customer-data.json");
ReadStream.pipe(C2JConverter).pipe(WriteStream);


