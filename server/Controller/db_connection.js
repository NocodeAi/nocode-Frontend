const db = require("../Database_connection/db")
const bcrypt = require("bcryptjs");
const { nocodeAi } = require('../Database_connection/db')
const { runQuery, apiResponse } = require('nocodeAi-helpers')
const { Sequelize } = require('sequelize')


const validate_connection = async (req,res) => 
{
   const {username,password,host,dialect,port,database} = req?.body

   console.log(username,password,host,dialect,port)
   const config = {
    username,
    password,
    database,
    host,
    dialect,
    port
}
   try {
    let db = new Sequelize({ ...config, ssl: true, pool: { maxConnections: 50, maxIdleTime: 30 }, language: 'en' })
    console.log('connecting...')
    await db.authenticate()
    console.log('database is connected successfully...')
    db.sync()
    let obj = {
        success:true,
        message:'database is connected successfully'
    }
    apiResponse(res,200,obj)
   }
   catch(error){
    let obj = {
        success:false,
        message:error
    }
    apiResponse(res,500,obj)
   }

}

// **********Add Connection Table**************
const add_connection = async (req, res) => {
    console.log(req.body, "body")
    let created_date = new Date();
    let updated_date = new Date();
    let password = req.body.pw;
    let conn_url = req.body.conn_string;
    let is_delete = "false";
    const salt = await bcrypt.genSalt(10);
    const Hashpasword = await bcrypt.hash(password, salt);
    let data = {
        conn_string: conn_url,
        pw: Hashpasword,
        created_at: created_date,
        updated_at: updated_date,
        is_deleted: is_delete,
    }
    let check_Conn = `SELECT * FROM dbConnection WHERE conn_string="${conn_url}"`;
    let sql = 'INSERT INTO dbConnection SET ?';
    db?.query(check_Conn, data, (error, result) => {
        (result && result.length ?
            res?.status(500).json({
                success: false,
                message: 'Connection String Already Exists...!',
                error: error,
            })
            : db?.query(sql, data, (error, result) => {
                if (error) {
                    console.log(error, "error")
                    res.status(500).json({
                        success: false,
                        message: 'Error found',
                        error: error,
                    })
                }
                res?.status(201).json({
                    success: true,
                    message: 'Connection Added Successfully...!',
                    data: result
                })
            }
            )
        )
    })
}
const auth_connection = async (req, res) => {
    let password = req.body.pw;
    let conn_url = req.body.conn_string;

    console.log("body", password, conn_url)
    let sql = `SELECT * FROM  dbconnection  WHERE conn_string="${conn_url}"`
    db.query(sql, async (error, results) => {
        const data = results[0]
        let checkpassword = data && data?.pw && await bcrypt.compare(password, data?.pw);
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'server error',
                error: error,
            })
        }
        if (!data) {
            res.status(400).json({
                success: false,
                message: 'Connection not Found'
            })
        }
        else if (!checkpassword) {
            res.status(400).json({
                success: false,
                message: 'Incorrect Password'
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: 'Connected Sucessfully...!',
                data: results
            })
        }
    })

}


module.exports = {
    add_connection,
    auth_connection,
    validate_connection
}



