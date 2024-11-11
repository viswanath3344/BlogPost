import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import PostDetails from './Screens/AddPost';
import { BlogProvider } from './Screens/context/BlogContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitle: "Posts"}} >
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Details' component={PostDetails} />
        </Stack.Navigator>
      </NavigationContainer>
      </BlogProvider>
  );
}

