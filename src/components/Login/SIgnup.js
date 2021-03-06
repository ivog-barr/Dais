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
                <Typography component={"span"}variant="caption">Para crear cuenta rellene el formulario</Typography>
            </Grid>

            <form onSubmit={handleSubmit}>
            <TextField fullWidth  label="Nombre" variant="filled" onChange={newUserName} required={true}/>
            <TextField fullWidth label="Email" variant="filled" onChange={newEmail} required={true}/>

            <TextField fullWidth label="Edad" variant="filled" type="number" onChange={newAge} required={true}/>

            <TextField fullWidth label="Contrase??a" variant="filled" type="password" onChange={newPassword} required={true} />

            
            <TextField fullWidth label="Repetir contrase??a" type="password" variant="filled" onChange={newRepeatPassword} required={true} />

            
           
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked={true} />} label="Acptar terminos y condiciones" />
             </FormGroup>
            <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>

            </form>
            </Paper>

            
          

        </Grid>
    )
    
}

export default Signup;