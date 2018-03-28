import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';

const ClearBtn = ({text, onPress}) => (
    <TouchableOpacity style={styles.container} onPress={onPress} >
        <View style={styles.wrapper} >
            <Image resizeMode="contain" style={styles.icon} source={require('./images/ic.png')} />
            <Text style={styles.txt} >{text}</Text>
        </View>
    </TouchableOpacity>
)

ClearBtn.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
}

export default ClearBtn;