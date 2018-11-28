var mysql = require('mysql2');
var Client = require('ssh2').Client;

var ssh = new Client();
ssh.on('ready', function() {
  ssh.forwardOut(
    '127.0.0.1',
    12345,
    '127.0.0.1',
    3306,
    function (err, stream) {
      if (err) throw err;
      var sql = mysql.createConnection({
        user: 'sajjxijv_avnvbhatta',
        password: 'DataBase2018!',
        database: 'VideoCandidates',
        stream: stream // <--- this is the important part
      });
      // use sql connection as usual
  });
}).connect({
    host: 'server234.web-hosting.com',
    port: 21096,
    username: 'sajjxijv',
    password: 'oacDjowdch9T'
});