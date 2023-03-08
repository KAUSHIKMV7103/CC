import React, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { Container,Paper} from '@material-ui/core';
import { Button } from '@mui/material';
import axios from 'axios';
const useStyles = makeStyles((theme) =>({
    root: {
        '& > *': {
             margin: theme.spacing(1),
              width: '25ch' },
    },
}));
export default function TextFields() { 
    const paperStyle={padding:'50px 20px',width:600,margin:'20px auto'}
    const[Aadhar_id,setAadhar]=useState("")
    const[Name,setName]=useState("")
    const[Age,setAge]=useState("")
    const[Gender,setGender]=useState("")
    const[Date,setDate]=useState("")
    const[Starting_Destination,setStarting]=useState("")
    const[Ending_Destination,setEnding]=useState("") 
    const[passengers,setpassengers]=useState([]) 
    const handleClick=(e)=>{
      e.preventDefault()
      const ticket={aadhar_id:Aadhar_id,name:Name,age:Age,gender:Gender,date:Date,Start:Starting_Destination,End:Ending_Destination}
      console.log(ticket)
      fetch("http://localhost:8080/post",{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify(ticket)
  }).then(()=>{
    console.log("New passenger booked")
  })
    }
    const classes = useStyles ();
    useEffect(()=>{
      fetch("http://localhost:8080/get")
      .then(res=>res.json())
      .then((result)=>{
        setpassengers(result)
      }
      )
    },[])
    const handleClick1=(aadhar_id)=>{
      console.log(aadhar_id);
      axios.delete("http://localhost:8080/del/"+aadhar_id);
    }
  return (
    <Container class="conta">
        <Paper elevation={3} style={paperStyle}>
    <form className="kaushi" noValidate autoComplete='off'>
        <h3 style={{textAlign:'left',color:'red'}}>Aadhar Id:</h3>
      <TextField id="outlined-basic" label="Enter your Aadhar Id" variant="outlined" fullWidth
      value={Aadhar_id}
      onChange={(e)=>setAadhar(e.target.value)}/>
      <h3 style={{textAlign:'left',color:'red'}}>Name :</h3>
      <TextField id="outlined-basic" label="Enter your Name" variant="outlined" fullWidth 
       value={Name}
       onChange={(e)=>setName(e.target.value)}/>
      <h3 style={{textAlign:'left',color:'red'}}>Age :</h3>
      <TextField id="outlined-basic" label="Enter your Age" variant="outlined" fullWidth
       value={Age}
       onChange={(e)=>setAge(e.target.value)}/>
      <h3 style={{textAlign:'left',color:'red'}}>Gender :</h3>
      <TextField id="outlined-basic" label="Enter your Gender" variant="outlined" fullWidth
       value={Gender}
       onChange={(e)=>setGender(e.target.value)}/>
      <h3 style={{textAlign:'left',color:'red'}}>Date :</h3>
      <TextField id="outlined-basic" label="Enter Date" variant="outlined" fullWidth
       value={Date}
       onChange={(e)=>setDate(e.target.value)}/>
      <h3 style={{textAlign:'left',color:'red'}}>Starting Destination :</h3>
      <TextField id="outlined-basic" label="Enter your Starting Destination" variant="outlined" fullWidth
       value={Starting_Destination}
       onChange={(e)=>setStarting(e.target.value)}/>
      <h3 style={{textAlign:'left',color:'red'}}>Ending Destination :</h3>
      <TextField id="outlined-basic" label="Enter your Ending Destination" variant="outlined" fullWidth
       value={Ending_Destination}
       onChange={(e)=>setEnding(e.target.value)}/>
       <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
    </form>
    {Aadhar_id}
    {Name}
    {Age}
    {Gender}
    {Date}
    {Starting_Destination}
    {Ending_Destination}
    
    </Paper>
    <Paper elevation={3} style={paperStyle}>
      {passengers.map(ticket=>( 
      <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}}>
        Aadhar_id:{ticket.aadhar_id}<br/>
        Name:{ticket.name}<br/>
        Age:{ticket.age}<br/>
        Gender:{ticket.gender}<br/>
        Date:{ticket.date}<br/>
        Starting_Destination:{ticket.Start}<br/>
        Ending_Destination:{ticket.End}<br/>
        <Button variant="contained" color="secondary" onClick={()=>handleClick1(ticket.aadhar_id)}>Delete</Button>
       
      </Paper>
 ))}
    </Paper>
    </Container>
    
  );
}