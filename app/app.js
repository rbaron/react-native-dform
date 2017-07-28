import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { DForm } from '../js'
import exampleSchema from './exampleSchema'

class RNDForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formState: {},
    }
    this.onFormChange = this.onFormChange.bind(this)
  }

  onFormChange(newFormState) {
    this.setState({formState: newFormState})
  }

  render() {
    return (
      <View style={styles.container}>
        <DForm
            onChange={this.onFormChange}
            schema={exampleSchema}
            state={this.state.formState} />
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
