import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {View} from 'react-native';
import HomeView from './features/home/Home';
import ProductView from './features/product/Product';
import {Product} from './modules/products';

type TabNavigatorParamList = {
  Home: undefined;
  Product: {product: Product};
};
const Stack = createNativeStackNavigator<TabNavigatorParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{title: 'Home', header: () => <View />}}
        />
        <Stack.Screen
          name="Product"
          component={ProductView}
          options={{header: () => <View />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
