import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css'
import { useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";


function Footer() {
    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )
   
    var footerComponent
    if (token !== '') {
        footerComponent=
    

            <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1" >
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom  className="textos" >Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            
                            <a href="https://github.com/brunokauaal" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                            <a href="https://www.instagram.com/bkauaalves/" target="_blank">
                                <InstagramIcon className="redes"  />
                            </a>
                            <a href="https://www.linkedin.com/in/bruno-kaua-655a6922a/" target="_blank">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos"  >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://github.com/brunokauaal">
                                <Typography variant="subtitle2" gutterBottom className="textos" align="center">https://github.com/brunokauaal</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
         </>
    }

     

    return (

        <>
        {footerComponent}
        </>
    )

}
export default Footer