const { nocodeAi } = require('../Database_connection/db')
const { runQuery, apiResponse } = require('nocodeAi-helpers')
const { v4: uuidv4 } = require('uuid')

const add_form = async (req, res) => {
    try {
        
        const {  name,properties,id } = req?.body
        console.log(properties,'properties')
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
        apiResponse(res, 200, obj)
    }
    catch (e) {
        let obj = {
            success: false,
            error: e
        }
        apiResponse(res, 500, obj)
    }
}

const create_form = async (req, res) => {

    console.log(req?.body)
    let sql = 'INSERT INTO forms SET ?'
    let result = await runQuery(nocodeAi, 'select * from forms')
    console.log(result)
    //     db?.query(sql, data, (error, result) => {

    //     console.log(result)
    //     res.status(201).json({
    //         success: true,
    //         message: 'User Successfully Added in Database',
    //         data: result
    //     })
    // })
    let obj = {
        success: true,
        message: 'form is inserted successfully'
    }
    apiResponse(res, 200, obj)
}


const get_all_users = (req, res) => {

    let sql = `SELECT * FROM  users`

    db.query(sql, (error, results) => {
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                error: error,
            })
        }
        console.log(results)
        res.status(200).json({
            success: true,
            message: 'Successfully found All Users',
            data: results
        })
    })

}

const delete_user = (req, res) => {
    const id = req.params.id
    let sql = `DELETE FROM users  WHERE user_id=${id}`

    db.query(sql, (error, results) => {
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'Error found',
                error: error,
            })
        }
        console.log(results)
        res.status(200).json({
            success: true,
            message: 'ONE DATA DELETED FROM TABLE USERS',
            data: results
        })

    })

}

const get_user = (req, res) => {
    const id = req.params.id
    let sql = `SELECT * FROM  users  WHERE user_id=${id}`

    db.query(sql, (error, results) => {
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'Error found',
                error: error,
            })
        }
        console.log(results)
        res.status(200).json({
            success: true,
            message: 'ONE DATA FACHED FROM TABLE USERS',
            data: results
        })


    })

}

const update_user = (req, res) => {
    const id = req.params.id
    let new_title = "full_stack_developer";
    let sql = `UPDATE  users SET user_title= '${new_title}' WHERE user_id=${id}`

    db.query(sql, (error, results) => {
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'Error found',
                error: error,
            })
        }
        console.log(results)
        res.status(200).json({
            success: true,
            message: 'ONE DATA UPDATED FROM TABLE USERS',
            data: results
        })
    })

}


module.exports = {
    add_form,
    // get_all_users,
    // delete_user,
    // get_user,
    // update_user
}






















// ********* Create New Table*************
// let sql = "CREATE TABLE dbConnection( _id int AUTO_INCREMENT,conn_string VARCHAR(255),pw VARCHAR(255),created_at VARCHAR(255),updated_at VARCHAR(255),is_deleted VARCHAR(255),PRIMARY KEY (_id))"
// db.query(sql, (error, result) => {
//     if (error) {
//         console.log(error, "error")
//         res.status(500).json({
//             success: false,
//             message: 'Server Error',
//             error: error,
//         })
//     }
//     console.log(result)
//     res.status(201).json({
//         success: true,
//         message: 'table craeted sucess',
//         data: result
//     })
// })
// ****************************************
