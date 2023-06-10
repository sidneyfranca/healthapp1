import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import New from './pages/New';
import Notification from './pages/Notification';
import Phofile from './pages/Profile';
import Search from './pages/Search';

import ButtonNew from './components/buttonNew';

import { Entypo, Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        tabStyle={{
            style:{
                backgroundColor: '#121212',
                bordeTopColor: 'transparent'
            },
            activeTintColor: '#FFF',
            tabStyle:{
                paddingBottom: 5,
                paddingTop: 5,

            }
        }}
        >
            <Tab.Screen
            name='Inicio'
            component={Home} 
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name='home' size={size} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name='Medicos'
            component={Search}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Feather name='search' size={size} color={color} />
                )
            }}
            />



            <Tab.Screen 
            name='Teleconsulta' 
            component={Notification}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <AntDesign name="videocamera" size={size} color={color} />
                )
            }}
            />

            <Tab.Screen
             name='Perfil' 
             component={Phofile}
             options={{
                tabBarIcon: ({ size, color }) => (
                    <Feather name='user' size={size} color={color} />
                )
            }}
            />

        </Tab.Navigator>
    )
}