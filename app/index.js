import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#ffffff',
    $border: '#e2e2e2',
    $inputtxt: '#797979',
    $lightGray: '#F0F0F0',
})

export default () => <Home />;