import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import { StatusBar } from "react-native";

export default StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    },
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: (({ navigation }) => ({
            headerTitle: navigation.state.params.title
        }))
    }
}, {
        mode: 'modal',
        cardStyle: {
            paddingTop: StatusBar.currentHeight
        }
    })