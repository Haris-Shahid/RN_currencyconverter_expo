import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Theme from '../screens/Theme';
import { StatusBar } from "react-native";

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: 'Options'
        }
    },
    Themes: {
        screen: Theme,
        navigationOptions: {
            headerTitle: 'Themes'
        }
    }
}, {
        headerMode: 'screen'
    })

const CurrencyListStack = createStackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        })
    }
}, {

    })

export default createAppContainer(createStackNavigator({
    Home: {
        screen: HomeStack,
    },
    CurrencyList: {
        screen: CurrencyListStack,
    },
}, {
        mode: 'modal',
        cardStyle: {
            paddingTop: StatusBar.currentHeight
        },
        headerMode: 'none'
    }))