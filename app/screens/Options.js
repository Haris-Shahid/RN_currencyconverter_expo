import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { ListItem, Separator } from '../components/List';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const ICON_COLOR = '#868686',
    ICON_SIZE = 23,
    ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    
    handleThemePress = () => {
        this.props.navigation.navigate('Themes');
    }

    handleSitePress = () => {

    }

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="default" translucent={false} />
                <ListItem
                    text="Themes"
                    onPress={this.handleThemePress}
                    customIcon={
                        <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
                    }
                />
                <Separator />
                <ListItem
                    text="Fixer.io"
                    onPress={this.handleSitePress}
                    customIcon={
                        <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
                    }
                />
                <Separator />
            </ScrollView>
        );
    }
}


export default Options;