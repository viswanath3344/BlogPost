import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/Screens/HomeScreen';
import PostDetails from './Screens/Screens/PostDetails';
import AddPost from './Screens/Screens/AddPost';
import EditPost from './Screens/Screens/EditPost';

import { Provider } from './Screens/context/BlogContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitle: "Posts"}} >
          <Stack.Screen name='Home' component={HomeScreen }/>
          <Stack.Screen name='Details' component={PostDetails} />
          <Stack.Screen name='AddPost' component={AddPost }/>
          <Stack.Screen name='EditPost' component={EditPost} />
        </Stack.Navigator>
      </NavigationContainer>
     </Provider>
  );
}

