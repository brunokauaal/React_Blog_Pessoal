import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';



function Navbar() {
    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuario deslogado com sucesso!")
        navigate('/login')
    }
    return (
        <>
            <AppBar className='nav' position="static">
                <Toolbar variant="dense">
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit">
                            Blog Pessoal
                        </Typography>
                    </Box>
                    
                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                            
                                <Box mx={1} style={{ cursor: "pointer" }}>
                                    <Typography variant="h6" color="inherit">
                                        Home
                                    </Typography>
                                </Box>
                            </Link>
                     
                
                        <Link to="/postagens" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/temas" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    temas
                                </Typography>

                            </Box>
                        </Link>

                        <Link to="/formularioTema" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    cadastrar tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' onClick={goLogout} >
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>

                    </Box>

                </Toolbar>
            </AppBar>

        </>
    );

}

export default Navbar