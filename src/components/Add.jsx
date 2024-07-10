import { Box, TextField } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import {useEffect, useState } from "react";
const Add = ({person}) => {
  // const[count,setCount]=useState(0);
  // let valueAdd=()=>{
  //   setCount(count+1)
  // }
  const[form,setForm]=useState(

    {
      fname:person.fname,
      department:person.department,
      semester:person.semester
    }
  )
  function valueCap(e)
  {
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }
  let valueAdd=()=>{
    console.log(form)
    
  }
  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="name-basic" label="Name" variant="outlined" name="fname" value={form.fname} onChange={valueCap} /><br></br>
      <TextField id="department-basic" label="Department" variant="outlined"  name="department" value={form.department} onChange={valueCap}/><br></br>
      <TextField id="semester-basic" label="Semester" variant="outlined"  name="semester" value={form.semester} onChange={valueCap}/><br></br>
      <Button variant="contained" onClick={valueAdd}>SUBMIT</Button><br/>
      {/* <small>count is {count}</small> */}
    </Box>
    
    </>
  )
}

export default Add