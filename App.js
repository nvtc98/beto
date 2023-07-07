import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Edit from './src/screens/Edit';
import ProductList from './src/screens/ProductList';
import normalize from 'react-native-normalize';
import {greyColor, highlightColor, mainColor} from './src/constants/style';
import SheetProvider from './src/hooks/useSheetContext';
import FixedHeader from './src/components/FixedHeader';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: highlightColor,
    secondary: mainColor,
    tertiary: greyColor,
  },
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider theme={theme}>
      <SheetProvider>
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <View style={{width: '100%', height: '100%'}}>
            <NavigationContainer>
              {/* <Tab.Navigator
                screenOptions={{
                  tabBarActiveTintColor: mainColor,
                  header: () => null,
                }}>
                <Tab.Screen
                  name="Home"
                  component={Home}
                  options={{
                    tabBarIcon: ({color, size}) => (
                      <Icon name="rocket" size={normalize(30)} color={color} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Details"
                  component={Details}
                  options={{
                    tabBarIcon: ({color, size}) => (
                      <Icon name="rocket" size={normalize(30)} color={color} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Edit"
                  component={Edit}
                  options={{
                    tabBarIcon: ({color, size}) => (
                      <Icon name="rocket" size={normalize(30)} color={color} />
                    ),
                  }}
                />
              </Tab.Navigator> */}
              <FixedHeader />
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ProductList" component={ProductList} />
                {/* <Stack.Screen name="Edit" component={Edit} /> */}
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </SafeAreaView>
      </SheetProvider>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: mainColor,
  },
});
