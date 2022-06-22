import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import "./EditProfile.css";

import { AccessTime } from "@mui/icons-material";
import React from "react";
import { Container } from "@mui/system";
import EditProfileData from "./EditProfileData";

const EditProfile = () => {
  const text1 = "Cambiar usuario";
  const text2 = "Cambiar lema ";
  const text3 = "Cambiar descripcion";
  return (
    <Container>
      <Paper className="container" elevation={15}>
        <Box className="box-titulo">
          <Typography className="ep-header" component="h1" variant="h4">
            Editar Perfil
          </Typography>
        </Box>

        <form action="#">
          <Box className="box3">
            <EditProfileData text1={text1} />
            <EditProfileData text1={text2} />
            <EditProfileData text1={text3} />
          </Box>

          <Box className="imageContainer">
            <Grid container spacing={2} className="grid">
              <Grid item xs={6}>
                <img
                  className="img1"
                  src="https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Clipart.png"
                ></img>
              </Grid>

              <Grid item xs={6}>
                <Typography>Etiquetas</Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} className="grid">
              <Grid item xs={6}>
                <Button>Cambiar skin</Button>
              </Grid>

              <Grid item xs={6}>
                <Typography>Blab bla bakabk</Typography>
              </Grid>
            </Grid>
          </Box>

          <Box className="frm-btn">
            <Button type="submit" variant="contained">
              Guardar Cambios
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default EditProfile;
