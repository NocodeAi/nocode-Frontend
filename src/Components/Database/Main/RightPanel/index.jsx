import React, { useState } from 'react'
import { constants } from '../../../../Utils/constants';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { GET_COLUMNS } from '../../../../Utils/apis'


const { Option } = Select;
const RightPanel = ({ schemaTable }) => {

  const [dataset, setDataset] = useState(schemaTable);
  const [column, setColumn] = useState('');
  const [columnList, setColumnList] = useState([]);
  const [table, setTable] = useState();

  console.log(schemaTable, "DATASET==>")
  console.log("DATASET==>", dataset)
  const tableList = schemaTable?.filter(name => name?.table_schema?.includes(dataset))?.map((v) => v?.table_names)
  const db_config = useSelector((store) => store?.dbReducer?.dbConfig)


 

  const handleChangeDataset = (event) => {
    setDataset(event.target.value);
  };

  const handleChangeTable = async (event) => {
    setTable(event.target.value);
    const config = {
      "username": db_config?.username,
      "password": db_config?.password,
      "database": db_config?.database,
      "host": db_config?.host,
      "dialect": 'postgres',
      "port": db_config?.port,
      "schema": dataset,
      "table": event.target.value,
    }
    await axios.post(`${GET_COLUMNS}`,
      config, {
      header: {
        'Content-Type': 'application/json'
      }
    }).then(function (data) {
      console.log(data, '<==data')
      if (data?.data?.success) {
        console.log(data?.data?.data[0]?.column_names, '<==column_names')
        setColumnList(data?.data?.data[0]?.column_names)
      }
      else {
        // setMsg('unable to connect to database!')
      }
    });
  };

  const handleChangeColumn = (event) => {
    setColumn(event.target.value);
  };

  return (
    <div className='properties_Panel'>
      <p style={{ fontSize: '20px' }}> <constants.MdSettingsSuggest className='sidebar-icons' />DB Properties</p>
      < div style={{ margin: '10px 2px' }}>
        <FormControl fullWidth >
          <InputLabel id="demo-simple-select-label">Datasets</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dataset}
            label="Datasets"
            onChange={handleChangeDataset}
          >
            {schemaTable && schemaTable.map((v, i) => <MenuItem key={i} value={v?.table_schema}>{v?.table_schema}</MenuItem>)}
          </Select>
          <FormHelperText>Select Dataset From Database</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: '10px 2px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tables</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={table}
            label="Table"
            onChange={handleChangeTable}
          >
            {tableList && tableList[0]?.map((v, i) => <MenuItem key={i} value={v}>{v}</MenuItem>)}
          </Select>
          <FormHelperText>Select Table From Dataset</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: '10px 2px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Column</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={column}
            label="Column"
            onChange={handleChangeColumn}
          >
            {columnList && columnList.map((v,i) => <MenuItem key={i} value={v}>{v}</MenuItem>)}
          </Select>
          <FormHelperText>Select Column From Table</FormHelperText>
        </FormControl>
      </div>
    </div >
  )
}

export default RightPanel