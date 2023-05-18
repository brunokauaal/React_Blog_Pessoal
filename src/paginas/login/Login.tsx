import React, { ChangeEvent, useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import useLocalStorage from "react-use-localstorage";
import UserLogin from "../../models/UserLogin";
import { Box, Grid, Typography, TextField, Button } from "@material-ui/core";
import './Login.css';

function Login() {
  let  navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');  //GURDA NOSSO TOKEN

  //FALANDO QUE VAMOS GURDAR AS INFORMAÇOES DE RETORNO AI UTILIZAMOS A FORMINHA
  const [userLogin, setUserLogin] = useState<UserLogin>({ 
    id: 0,
    usuario: '',
    senha: '',
    token: ''
  });

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    });
  }

  useEffect(()=>{
    if (token != ''){
        navigate('/home')
    }
  }, [token,navigate])



  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault(); // previne o comportamento padrão do botão para impedir que a página seja atualizada
    try {
      await login(`/usuarios/logar`, userLogin, setToken);
      alert('Usuário logado com sucesso!');
    } catch (error) {
      alert('Dados do usuario incosistentes.  Erro ao fazer login!');
    }
  }

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" xs={6}>
          <Box paddingX={20}>
            <form onSubmit={onSubmit}>
              <Typography variant="h3" gutterBottom color='textPrimary' align='center' className="textos1">Entrar</Typography>
              <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id="usuario" label="Usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
              <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
              <Box marginTop={2} textAlign={'center'}>
                <Button type='submit' variant='contained' color='primary'>
                  Logar
                </Button>
              </Box>
            </form>
            <Box display={'flex'} justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
              </Box>
              <Link to='/cadastro'>
                <Typography variant="subtitle1" gutterBottom align="center" className="textos1">Cadastre-Se</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} className="imagem"></Grid>
      </Grid>
    </>
  );
}

export default Login;
