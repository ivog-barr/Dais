import {Grid,Paper, Avatar, Typography, TextField, Button,FormGroup,FormControlLabel,Checkbox} from "@mui/material"
import "./Signup.css"
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';



const Signup = () =>{

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

            <form>
            <TextField fullWidth id="filled-basic" label="Nombre" variant="filled" />
            <TextField fullWidth id="filled-basic" label="Email" variant="filled" />
            <TextField fullWidth id="filled-basic" label="Edad" variant="filled" />
            <TextField fullWidth id="filled-basic" label="Contraseña" variant="filled" />
            <TextField fullWidth id="filled-basic" label="Repetir contraseña" variant="filled" />
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