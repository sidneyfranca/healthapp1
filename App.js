import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import  Axios  from "axios";


export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    
  );

  const submeterInformação=(texto) => {
    Axios.post( "https://192.168.0.165:3001/item", {item: texto})
  }
}


