var thrift = require('thrift');

var Cal = require('./thrift/gen-nodejs/CalService');

var Conn = thrift.createConnection("_10000-tcp._tcp.test-openshift-be.ghuang", 10000);

Conn.on('error', function(err) {
  console.log(err)
});

var Service={}
Service.Cal = thrift.createClient(Cal, Conn);

module.exports = Service