import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GoldPriceView from './src/view/gold-price'
import MonthlyPageView from './src/view/monthly'
import WeeklyPageView from './src/view/weekly'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Monthly" component={MonthlyPageView} />
        <Tab.Screen name="GoldPrice" component={GoldPriceView} />
        <Tab.Screen name="Weekly" component={WeeklyPageView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
