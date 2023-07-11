import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/token/Actions';
import { UserState } from '../../../store/token/Reducer';
import './Navbar.css';
import { toast } from 'react-toastify';

function Navbar() {

    let navigate = useNavigate();

    const dispatch = useDispatch()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário Desconectado!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token !== '0') {
        navbarComponent =
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start" marginLeft="50px">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" >
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                |
                            </Typography>
                        </Box>
                        <Link to="/postagens" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                |
                            </Typography>
                        </Box>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                |
                            </Typography>
                        </Box>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                |
                            </Typography>
                        </Box>
                        <Link to="/postagensportitulo" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens Por Título
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                |
                            </Typography>
                        </Box>


                        <Link to="/perfil" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Perfil
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                |
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Sair
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
    )
}

export default Navbar;