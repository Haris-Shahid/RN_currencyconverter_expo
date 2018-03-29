import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import PropTypes from  'prop-types';

const Header = ({onPress}) => (
    <View style={styles.container} >
        <TouchableOpacity style={styles.button} onPress={onPress} >
            <Image resizeMode='contain' style={styles.icon} source={require('./images/gr.png')} />
        </TouchableOpacity>
    </View>
);

Header.propTypes = {
    onPress: PropTypes.func,
};

export default Header;