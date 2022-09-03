const router = require('express').Router()
const { add_connection,auth_connection,validate_connection} = require('../Controller/db_connection')





// ******{all_requests}******//
router.post('/validate_connection', validate_connection)
router.post('/add_connection', add_connection)
router.post('/auth_connection', auth_connection)






module.exports = router