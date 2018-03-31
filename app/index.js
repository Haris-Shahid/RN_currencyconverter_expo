import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import Options from './screens/Options';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#ffffff',
    $border: '#e2e2e2',
    $inputtxt: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434',

    // outline: 1, don't know why it is not working in android
})
// great thing in this style if you add outline 1 it gaves every component an outline

export default () => <Options />;