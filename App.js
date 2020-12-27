import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, TouchableOpacity } from 'react-native'
import HomeScreen from "./src/screens/HomeScreen"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={"Home"} 
        screenOptions={{
          // headerShown: false,
          // animationEnabled: false,
        }}
      >
        {/* 設立路由(可被造訪的頁面) */}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

