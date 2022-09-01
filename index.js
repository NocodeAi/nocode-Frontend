const express = require('express')
const cors = require("cors")
const ldap = require('ldapjs');


// 
const app = express()
app.use(express.json())
app.use(cors())

app.use('/', require('./server/Routes/routes'))

const port = 8080 

app.listen(port, () => {
  console.log("SERVER IS RUNNING ON PORT ",port)
})

function authenticateDN(username, password) {
  var client = ldap.createClient({
    url: 'ldap://localhost:10389'
  });
  client.bind(username, password, function (err) {
    if (err)
      console.log("error in new connection " + err);
    else
      console.log('successfully connected with ldap')
  });
}

// authenticateDN('uid=admin,ou=system','secret');
