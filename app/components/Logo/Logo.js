import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import styles from './style';

const Logo = () => (
    <View style={styles.container} >
        <ImageBackground resizeMode="contain" style={styles.containerImage} source={require('./images/bg.png')} >
            <Image resizeMode="contain"   style={styles.image} source={require('./images/Logo.png')} />
        </ImageBackground>
        <Text style={styles.text} >Currency Converter</Text>
    </View>
);

export default Logo;