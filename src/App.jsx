import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { get } from "./services";
import { CardMovies, DropDown } from './components';
import {
  Typography,
} from "@mui/material";

function App() {
  const [type, setType] = useState()
  const [types, setTypes] = useState([]);
  const [entries, setEntries] = useState([]);

  async function getTypes(){
    const types = await get();
    console.log(types)
    setEntries(types.entries);//entries es el nombre del array
  }

  async function getEntries(url){
  };

  const handleChange = (event) =>{
    setType(event.target.value);
    getEntries(event.target.value)
  };

  useEffect(() =>{
    getTypes()
  },[])
  return (
    
      <Container>
        <DropDown></DropDown>
        <Typography variant="h3">Popular Movies</Typography>
        <CardMovies entries={entries}></CardMovies>
      </Container>
    
  )
}

export default App
