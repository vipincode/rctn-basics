import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

class RandomNumber extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  handlePress = () => {
    this.props.onPress(this.props.id);
    console.log(this.props.number);
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handlePress}>
          <Text
            style={[styles.button, this.props.isDisabled && styles.disabled]}
          >
            {' '}
            {this.props.number}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 50,
    textAlign: 'center',
    fontSize: 21,
    backgroundColor: '#6ab04c',
    color: '#c7ecee',
    borderRadius: 6,
    margin: 12,
    padding: 6,
    width: 80,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default RandomNumber;
