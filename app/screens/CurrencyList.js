import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, StatusBar, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string,
  };

  handlePress = (currency) => {
    const { navigation, dispatch } = this.props;
    const { type } = navigation.state.params;
    if (type === 'base') {
      dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      dispatch(changeQuoteCurrency(currency));
    }

    navigation.goBack(null);
  };

  render() {
    const {
      baseCurrency, quoteCurrency, navigation, primaryColor,
    } = this.props;
    let comparisonCurrency = baseCurrency;
    if (navigation.state.params.type === 'quote') {
      comparisonCurrency = quoteCurrency;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <View style={{ height: 60, width: '100%', borderBottomColor: '#ddd', borderBottomWidth: 0.5, shadowColor: '#ddd', shadowOpacity: 0.7, elevation: 2, shadowRadius: 5, justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ fontWeight: 'bold', fontSize: 20 }} >{navigation.state.params.title}</Text>
        </View>
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View >
    );
  }
}

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  primaryColor: state.theme.primaryColor,
});

export default connect(mapStateToProps)(CurrencyList);
