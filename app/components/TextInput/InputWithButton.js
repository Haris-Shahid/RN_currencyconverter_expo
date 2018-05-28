import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';
import color from 'color';

const InputWithButton = (props) => {
    const { onPress, buttonText, editable = true } = props;

    const containerStyles = [styles.container];

    const underlayColor = color(styles.$btnbgColorBase).darken(styles.$btnbgColorModifier);

    if (editable === false) {
        containerStyles.push(styles.containerDisabled)
    }

    const buttonTextStyle = [styles.btnTxt];
    if (props.textColor) {
        buttonTextStyle.push({ color: props.textColor })
    }

    return (
        <View style={styles.container} >
            <TouchableHighlight underlayColor={underlayColor} style={styles.btnContainer} onPress={onPress} >
                <Text style={buttonTextStyle} >{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
        </View>
    )
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
    textColor: PropTypes.string,
};

export default InputWithButton;