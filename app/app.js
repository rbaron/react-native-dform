import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { DForm } from '../js'
import { exampleallFields, exampleLabelsGif } from './exampleSchema'

class RNDForm extends Component {
  constructor(props) {
    super(props)
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
            keyExtractor={f => f.label}
            onChange={this.onFormChange}
            schema={exampleallFields}
            initialState={this.state.formState} />
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
