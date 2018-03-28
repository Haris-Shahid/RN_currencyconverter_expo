import React from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '29.74';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    handlePressBaseCurrency = () => {
        console.log('press base');
    }

    handlePressQuoteCurrency = () => {
        console.log('press quote');
    }

    handleTextChange = (text) => {
        console.log('change text', text);
    }

    render(){
        return(
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Logo />
                <InputWithButton 
                    keyboardType="numeric" 
                    defaultValue={TEMP_BASE_PRICE} 
                    buttonText={TEMP_BASE_CURRENCY} 
                    onPress={this.handlePressBaseCurrency} 
                    onChangeText={this.handleTextChange}
                />
                <InputWithButton 
                    buttonText={TEMP_QUOTE_CURRENCY} 
                    onPress={this.handlePressQuoteCurrency} 
                    editable={false} 
                    value={TEMP_QUOTE_PRICE}
                />
            </Container>
        )
    }
}

export default Home;