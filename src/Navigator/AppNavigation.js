import React from "react";
import { View,
         Text } from "react-native";

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Splash from "../Splash";
import Login from "../User/Login";
import Signup from "../User/Signup";

const AppNavigation = () => {

const Stack = createStackNavigator();
 
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash"
                    component={Splash}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Signup"
                    component={Signup}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation



