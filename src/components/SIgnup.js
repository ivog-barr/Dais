import {Grid,Paper, Avatar, Typography, TextField, Button,FormGroup,FormControlLabel,Checkbox} from "@mui/material"
import "./Signup.css"
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useState } from "react";



const Signup = (props) =>{
    const [userName, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("");
    

    const newUserName = (event) =>{
        setUsername(event.target.value);
    }

    const newEmail = (event) =>{
        setEmail(event.target.value);
    }

    const newAge = (event) =>{
       setAge(event.target.value);

    }

    const newPassword= (event) =>{
       setPassword(event.target.value)
    }

    const newRepeatPassword= (event) =>{
        setRepeatPassword(event.target.value)
    }

    

    const handleSubmit = (event) =>{
        
       
            event.preventDefault();
            const user = {
                name : userName,
                email: email,
                age : age,
                password: password,
                repeatPassword: repeatPassword
            }
    
            props.onNewUser(user);

        

       

    }


    return(
        <Grid>
            <Paper elevation={20} className="paperStyle">
            <Grid align="center">
                <Avatar className="avatar-style">
                    <AddCircleOutlinedIcon />

                </Avatar>
                
                <h2 className="headerStyle">Nuevo usuario</h2>
                <Typography variant="caption">Para crear cuenta rellene el formulario</Typography>
            </Grid>

            <form onSubmit={handleSubmit}>
            <TextField fullWidth id="filled-basic" label="Nombre" variant="filled" onChange={newUserName} />
            <TextField fullWidth id="filled-basic" label="Email" variant="filled" onChange={newEmail} />
            <TextField fullWidth id="filled-basic" label="Edad" variant="filled" type="number" onChange={newAge}/>
            <TextField fullWidth id="filled-basic" label="Contraseña" variant="filled" type="password" onChange={newPassword} />
            <TextField fullWidth id="filled-basic" label="Repetir contraseña" type="password" variant="filled" onChange={newRepeatPassword} />

            <label className="labels">Incomplete Fields</label> 
            
           
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Acptar terminos y condiciones" />
             </FormGroup>
            <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>

            </form>
            </Paper>

            
          

        </Grid>
    )
    
}

export default Signup;