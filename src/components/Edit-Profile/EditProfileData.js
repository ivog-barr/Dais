
import {
    Box,
    createTheme,
    Grid,
    Paper,
    Rating,
    Typography,
    ThemeProvider,
    TextField,
  } from "@mui/material";
  import "./EditProfile.css";
  import "./EditProfileData.css"
  





const EditProfileData = (props) =>{
    return(
        <Grid container spacing={6} className="grid-data">

        <Grid item xs={6}>

          <Typography component="p" variant="subtitle1">{props.text1}</Typography>

        </Grid>

        <Grid item xs={6}>
          <TextField variant="standard"/>

        </Grid>
      
      
      </Grid>

    )
}

export default EditProfileData;