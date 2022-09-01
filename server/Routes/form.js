const router = require('express').Router()
const { add_form ,getAllForms,getForm} = require('../Controller/forms')




// ******{all_requests}******//


router.post('/add_form', add_form)
router.get('/get_all_forms', getAllForms)
router.get('/get_all_forms', getForm)








module.exports = router