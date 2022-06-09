import React from "react";
import { Avatar, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField,Button, Typography, Link } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

import "./Login.css"

const Login = () => {
  return (
    <Grid>
      <Paper elevation={10} className="paperStyle">
        <Grid align="center">
          <Avatar className="avatarStyle">
            <LoginOutlinedIcon></LoginOutlinedIcon>
          </Avatar>
          <h2>Iniciar Sesion</h2>
        </Grid>

        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          placeholder="Enter Username"
          fullWidth
          requiered
        />

        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          placeholder="Enter Username"
          fullWidth
          requiered
          type="password"
        />

        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
        </FormGroup>

        <Button className="btn-style" type="submit" color="primary" fullWidth variant="contained"  >Sign in</Button>

        <Typography>
            <Link href="#" >Registrate!</Link>
        </Typography>

        <Typography>
            <Link href="#" >¿Olvidaste tu contraseña?</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
