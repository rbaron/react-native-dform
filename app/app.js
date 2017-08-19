import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

console.disableYellowBox = true;

import { setTheme, DForm } from '../js'
import {
  conditionalAllFields,
  exampleallFields,
  exampleLabelsGif,
 } from './exampleSchema'

class RNDForm extends Component {
  constructor(props) {
    super(props)
    setTheme({
      primaryColor: 'red',
      primaryColorRGB: '250, 0, 0',
    })
    this.state = {
      formState: {},
    }
    this.onFormChange = this.onFormChange.bind(this)
  }

  onFormChange(newFormState) {
    console.log('Got new state:', newFormState)
  }

  render() {
    return (
      <View style={styles.container}>
        <DForm
            initialState={this.state.formState}
            keyExtractor={f => f.label}
            onChange={this.onFormChange}
            primaryColor='#c00'
            schema={exampleLabelsGif}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export { RNDForm };
