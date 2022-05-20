const mysql = require('mysql')

const con = mysql.createConnection({
    host: "95.111.193.107",
    user: 'transportBackend',
    password: 'transportBackend',
    database: 'nwg_transport_backend'
})

con.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

module.exports = con;