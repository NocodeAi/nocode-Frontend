const { nocodeAi } = require('../Database_connection/db')
const { runQuery, apiResponse } = require('nocodeAi-helpers')
const { v4: uuidv4 } = require('uuid')

const add_form = async (req, res) => {
    try {

        const { name, properties, id } = req?.body
        console.log(properties, 'properties')
        let project_id = uuidv4()
        let sql_validation = `select * from forms where project_id='${project_id}' and name='${name}' and is_deleted is not true`
        let sql
        let validation = await runQuery(nocodeAi, sql_validation)
        if (validation.length) {
            sql = `update forms set properties=${properties},name='${name}' where id='${id}'`

        }
        else {
            let id = uuidv4()
            sql = `INSERT INTO forms( id, project_id, name, description, properties, is_deleted, created_at, updated_at) VALUES ('${id}', '${project_id}', '${name}', '', '${JSON.stringify(properties)}',false, NOW(), NOW())`
        }
        // let sql = 'INSERT INTO forms SET ?'
        let result = await runQuery(nocodeAi, sql)
        console.log(result)
        let obj = {
            success: true,
            message: 'form is inserted successfully'
        }
        apiResponse(res, 201, obj)
    }
    catch (e) {
        let obj = {
            success: false,
            error: e
        }
        apiResponse(res, 500, obj)
    }
}
const getAllForms = async (req, res) => {
    try {
        const { project_id } = req?.body
        let sql = `select * from forms where project_id='${project_id}'`
        let result = await runQuery(nocodeAi,sql)
        let obj = {
            success: false,
            forms: result
        }
        apiResponse(res, 200, obj)
    }
    catch (e) {

    }
}
const getForm = async (req, res) => {
    try {
        const { formId } = req?.body
        let sql = `select * from forms where id='${formId}'`
        let result = await runQuery(nocodeAi,sql)
        let obj = {
            success: false,
            forms: result
        }
        apiResponse(res, 200, obj)
    }
    catch (e) {

    }
}




module.exports = {
    add_form,
    getAllForms,
    getForm
}