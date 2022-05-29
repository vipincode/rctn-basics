import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import RandomNumber from './RandomNumber';

class Game extends Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
  };
  state = {
    slectedNumbers: [0, 4],
  };
  randomNumbers = Array.from({ length: this.props.randomNumberCount }).map(
    () => 1 + Math.floor(10 * Math.random())
  );
  target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  // TODO: Suffle Random Numbers
  isNumberSelected = (numberIndex) => {
    return this.state.slectedNumbers.indexOf(numberIndex) >= 0;
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.target}</Text>
        <View style={styles.randomContainer}>
          {this.randomNumbers.map((randomNumber, index) => (
            <RandomNumber
              key={index}
              number={randomNumber}
              isSelected={this.isNumberSelected(index)}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#c7ecee',
    flex: 1,
  },
  target: {
    marginHorizontal: 50,
    textAlign: 'center',
    fontSize: 40,
    backgroundColor: '#6ab04c',
    color: '#c7ecee',
    borderRadius: 6,
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
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
});

export default Game;
