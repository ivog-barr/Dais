import React from "react";
import { Avatar, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField,Button, Typography, Link } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useState } from "react";
import "./Login.css"

const Login = (props) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const newUserName = (event) =>{
    
    setUsername(event.target.value);
  }

  const newPassword = (event) =>{
   
    setPassword(event.target.value);
  }


  const loginFormHandler = (event) =>{
    event.preventDefault()

    const oldUser = {
      nickname : userName,
      password : password,
    }

    props.oldUser(oldUser);

  }


  return (
    <Grid>
      <Paper elevation={10} className="paperStyle">
        <Grid align="center">
          <Avatar className="avatarStyle">
            <LoginOutlinedIcon></LoginOutlinedIcon>
          </Avatar>
          <h2>Iniciar Sesion</h2>
        </Grid>

        <form action="#" onSubmit={loginFormHandler}>
        <TextField
          
          label="Filled"
          variant="filled"
          placeholder="Enter Username"
          fullWidth
          required={true}
          onChange={newUserName}
        />

        <TextField
         
          label="Filled"
          variant="filled"
          placeholder="Enter Password"
          fullWidth
          required={true}
          type="password"
          onChange={newPassword}
        />

        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
        </FormGroup>

        <Button className="btn-style" type="submit" color="primary" fullWidth variant="contained"  >Sign in</Button>

        <Typography component={"span"}>
            <Link href="#" >Registrate!</Link>
        </Typography>

        <Typography component={"span"}>
            <Link href="#" >¿Olvidaste tu contraseña?</Link>
        </Typography>
          
        </form>

 
      </Paper>
    </Grid>
  );
};

export default Login;
