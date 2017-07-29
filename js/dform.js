import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { activeFields, defaultState, renderForm } from 'dform'

import {
  getTheme,
  MKColor,
  MKSwitch,
  MKTextField,
} from 'react-native-material-kit';


class DForm extends React.Component {
  static propTypes = {
    initialState: PropTypes.object,
    keyExtractor: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    schema: PropTypes.object,
  }

  static defaultProps = {
    initialState: {},
    keyExtractor: field => field.id,
  }

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.inputFactories = {
      'boolean': this.booleanInputFactory.bind(this),
      'string': this.stringInputFactory.bind(this),
    }

    this.state = {
      ...defaultState(props.schema, props.keyExtractor),
      ...props.initialState,
    }
  }

  componentWillMount() {
    this.props.onChange(this.filterState(this.state))
  }

  booleanInputFactory(field) {
    const { keyExtractor } = this.props
    const key = keyExtractor(field)
    // TODO: figure out why animation does not work anymore
    return (
      <View key={key} style={styles.row}>
        <Text style={styles.label}>
          {field.label}
        </Text>
        <MKSwitch
            testID={key}
            checked={this.state[key]}
            onCheckedChange={v => this.onChange(key, v.checked)}
          />
      </View>
    );
  }

  stringInputFactory(field) {
    const { keyExtractor } = this.props
    const key = keyExtractor(field)
    return (
      <View key={key} style={styles.textInputWrapper}>
      <MKTextField
          key={key}
          testID={key}
          autoCorrect={field.autocorrect || false}
          value={this.state[key]}
          onChangeText={v => this.onChange(key, v)}
          floatingLabelEnabled={true}
          textInputStyle={styles.textInput}
          placeholder={field.label} />
      </View>
    );
  }

  onChange(key, value) {
    // For some reason testing this is not working with React 16.0.0-alpha,
    // So I called this.props.onChange synchronously instead.
    //this.setState({[key]: value}, () => this.props.onChange(filterState()))

    const newState = {
      ...this.state,
      [key]: value,
    }
    this.setState(newState)
    this.props.onChange(this.filterState(newState));
  }

  filterState(state) {
    const { keyExtractor, schema } = this.props
    const keys = activeFields(state, schema).map(keyExtractor)
    return keys.reduce((acc, k) => {
      if (this.state[k] !== undefined) {
        return { ...acc, [k]: this.state[k] }
      } else {
        return acc
      }
    }, {})
  }

  render() {
    const { schema } = this.props

    return (
      <View style={{ padding: 20 }}>
        { renderForm(this.state, schema, this.inputFactories) }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 30,
  },
  textInputWrapper: {
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export { DForm }
