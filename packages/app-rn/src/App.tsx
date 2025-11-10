import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import IngredientsScreen from './screens/IngredientsScreen';
import RecipesScreen from './screens/RecipesScreen';

export type RootStackParamList = {
  Home: undefined;
  Ingredients: undefined;
  Recipes: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'What To Eat' }}
        />
        <Stack.Screen 
          name="Ingredients" 
          component={IngredientsScreen}
          options={{ title: 'My Ingredients' }}
        />
        <Stack.Screen 
          name="Recipes" 
          component={RecipesScreen}
          options={{ title: 'Recommended Recipes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
