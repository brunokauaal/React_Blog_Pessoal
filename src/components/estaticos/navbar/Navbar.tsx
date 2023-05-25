import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { AddToken } from '../../../store/token/Actions';
import { toast } from "react-toastify";



function Navbar() {
    //const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate();

    const dispatch= useDispatch()
    const token = useSelector<UserState, UserState["tokens"]>(

        (state) => state.tokens
      )

    function goLogout() {
        dispatch (AddToken(''))
       toast.info('Usuario deslogado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick:true ,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
       });
        navigate('/login')
    }
    var navbarComponent
    if (token !== '') {
        navbarComponent=
    
    
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
            }
        return (
         <>
        {navbarComponent}
        </>
    );

}

export default Navbar