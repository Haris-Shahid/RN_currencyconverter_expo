import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, TouchableOpacity, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/theme';
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  };

  handlePressTheme = (color) => {
    const { navigation, dispatch } = this.props;
    dispatch(changePrimaryColor(color));
    navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar hidden={true} />
        <View style={{ height: 60, width: '100%', borderBottomColor: '#ddd', borderBottomWidth: 0.5, shadowColor: '#ddd', shadowOpacity: 0.7, elevation: 2, shadowRadius: 5, flexDirection: 'row' }} >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flex: 1, justifyContent: "center", alignItems: 'center' }} >
            <Ionicons name={`${ICON_PREFIX}-arrow-back`} size={ICON_SIZE} color='#000' />
          </TouchableOpacity>
          <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{ fontWeight: 'bold', fontSize: 20 }} >Themes</Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>
        <ListItem
          text="Blue"
          onPress={() => this.handlePressTheme(styles.$blue)}
          selected
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePressTheme(styles.$orange)}
          selected
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePressTheme(styles.$green)}
          selected
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlePressTheme(styles.$purple)}
          selected
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default connect()(Themes);
