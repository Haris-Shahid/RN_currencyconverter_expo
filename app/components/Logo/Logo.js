import React, {Component} from 'react';
import { View, Text, ImageBackground, Image, Animated, Keyboard } from 'react-native';
import styles from './style';

class Logo extends Component{
    componentDidMount(){
        this.keyboardShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardShow)
        this.keyboardHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardHide)
    }

    componentWillUnmount(){

    }

    keyboardShow = () => {

    }

    keyboardHide = () => {

    }

    render(){
        return (
            <View style={styles.container} >
                <ImageBackground resizeMode="contain" style={styles.containerImage} source={require('./images/bg.png')} >
                    <Image resizeMode="contain"   style={styles.image} source={require('./images/Logo.png')} />
                </ImageBackground>
                <Text style={styles.text} >Currency Converter</Text>
            </View>
        );
    }
} 

export default Logo;