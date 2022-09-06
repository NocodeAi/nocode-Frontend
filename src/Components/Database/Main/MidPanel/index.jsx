
import { Input, Button } from "antd";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Hint } from "react-autocomplete-hint";
import { constants } from '../../../../Utils/constants';
import { UserOutlined } from "@ant-design/icons";
import { VscEditorLayout } from "react-icons/vsc";
import { EXECUTE_QUERY } from '../../../../Utils/apis'

// const { TextArea } = Input;
const MidPanel = () => {
  const [hintData, setHintData] = useState([]);
  const [text, setText] = useState("");
  const [queryResult, setQueryResult] = useState("");

  const db_config = useSelector((store) => store?.dbReducer?.dbConfig)
  const config = {
    "username": db_config?.username,
    "password": db_config?.password,
    "database": db_config?.database,
    "host": db_config?.host,
    "dialect": 'postgres',
    "port": db_config?.port,
    "query": text
  }
  console.log(queryResult ? Object?.keys(queryResult[0]) : 'null', 'query result')
  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    var hintArray = [];
    res.data.map((a) => hintArray.push(a.name));
    setHintData(hintArray);
  };
  const run = async () => {
    await axios.post(`${EXECUTE_QUERY}`,
      config, {
      header: {
        'Content-Type': 'application/json'
      }
    }).then(function (data) {
      // console.log(data, '<==data')
      if (data?.data?.success) {
        // setMsg('database is cennected successfully')
        setQueryResult(data?.data?.data)
        // setAgProp("setAgProps")
      }
      else {
        // setMsg('unable to connect to database!')
      }
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p style={{ fontSize: '20px' }}> <constants.VscEditorLayout className='sidebar-icons' />Query Editor</p>
      <Button style={{'marginLeft':'13px'}} onClick={run}>Run</Button>
      <div className="App">

        <Hint options={hintData} allowTabFill>
          <input
            className="input-with-hint"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Hint>
      </div>

      <br />

      {/* Table */}

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
          <TableHead className="table_head">
            <TableRow>
              {queryResult[0] ? Object.keys(queryResult[0]).map((v) => <TableCell className="table_head" align="right">{v}</TableCell>) : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(queryResult) && queryResult.map((row, index) => (
              <TableRow className="table_row"
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                {Object.values(row).map((v) => <TableCell align="right">{v}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div >
        {/* <h5>Try typing these words</h5> */}
        {/* <code>{`[${hintData.toString()}]`}</code> */}
        <p >Query Result</p>

      </div>
    </>
  );
};

export default MidPanel;
