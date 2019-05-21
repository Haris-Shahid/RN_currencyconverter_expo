import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Options',
      },
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Themes',
      },
    },
  },
  {
    headerMode: 'none',
  },
);

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      header: () => null,
      // headerTitle: navigation.state.params.title,
    })
  },
});

export default createAppContainer(createStackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    // cardStyle: { paddingTop: StatusBar.currentHeight },
  },
));
