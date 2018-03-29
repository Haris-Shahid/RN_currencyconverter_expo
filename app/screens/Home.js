import React from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearBtn } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

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

    handleSwapCurrency = () => {
        console.log('swap currency');
    }

    handleOptionPress = () => {
        console.log('optionPress');
    }

    render(){
        return(
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header onPress={this.handleOptionPress} />
                <KeyboardAvoidingView behavior="padding" >
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
                    <LastConverted 
                        base={TEMP_BASE_CURRENCY} 
                        quote={TEMP_QUOTE_CURRENCY} 
                        date={TEMP_CONVERSION_DATE} 
                        conversionRate={TEMP_CONVERSION_RATE} 
                    />
                    <ClearBtn text="Reverse Currencies" onPress={this.handleSwapCurrency} />
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

export default Home;