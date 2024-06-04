import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Sayfa Geçişi İçin Gerekli Kütüphaneler
import { createStackNavigator } from '@react-navigation/stack'; // Sayfa Geçişi İçin Gerekli Kütüphaneler

import LoginScreen from './screens/loginScreen'; // Kullanılacak Sayfaların isimleri ve pathleri
import ProfileScreen from './screens/profileScreen'; // Kullanılacak Sayfaların isimleri ve pathleri
import CustomizeScreen from './screens/customizeScreen'; // Kullanılacak Sayfaların isimleri ve pathleri
import HomeScreen from './screens/homeScreen' // Kullanılacak Sayfaların isimleri ve pathleri
import forgotPasswordScreen from './screens/forgotPasswordScreen' // Kullanılacak Sayfaların isimleri ve pathleri

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Forgot" screenOptions={{headerShown: false}} /* Başlangıç ekranını seçtik, üst kısımda sayfa adını gösteren yazıyı kaldırdık*/>  
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Customize" component={CustomizeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Forgot" component={forgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;