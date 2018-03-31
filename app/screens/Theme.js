import React, { Component } from 'react';
import { ScrollView, StatusBar } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
})

class Theme extends Component {
    handleThemePress = (color) => {

    }

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="default" translucent={false} />
                <ListItem
                    text="Blue"
                    onPress={() => this.handleThemePress(styles.$blue)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$blue}
                />
                <Separator />
                <ListItem
                    text="Orange"
                    onPress={() => this.handleThemePress(styles.$orange)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$orange}
                />
                <Separator />
                <ListItem
                    text="Green"
                    onPress={() => this.handleThemePress(styles.$green)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$green}
                />
                <Separator />
                <ListItem
                    text="Purple"
                    onPress={() => this.handleThemePress(styles.$purple)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$purple}
                />
                <Separator />

            </ScrollView>
        );
    }
}

export default Theme;