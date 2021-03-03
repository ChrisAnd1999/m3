import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import  SignIn  from 'CommunityRides/components/Screens/SignInScreen'
import SignUp from 'CommunityRides/components/Screens/SignUpScreen'


const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
