import { TabContext,TabPanel } from "@material-ui/lab";
import { AppBar,Tab,Tabs,Typography,Box} from "@material-ui/core";
import React , {useState}from "react";
import ListaPostagem from "../listapostagem/ListaPostagem";
import './TabPostagem.css'


function TabPostagem () {
    const [value, setValue] = useState('1')
    function handlechange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }

    return(
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor='secondary' onChange={handlechange}>
                    <Tab label="Todas as postagens" value="1"/>
                    <Tab label="Sobre nós" value="2"/>
                    </Tabs>
                </AppBar>
                <TabPanel value="1">
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="tt">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary"  align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quis quo officiis molestiae nihil nemo magni velit facilis expedita ex labore quisquam ducimus accusantium quam pariatur amet fuga, mollitia repellendus?</Typography>
                    
                </TabPanel>
            </TabContext>

        </>
    )

}

export default TabPostagem;