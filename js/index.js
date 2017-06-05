import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { renderForm } from 'dform'

import {
  getTheme,
  MKColor,
  MKSwitch,
  MKTextField,
} from 'react-native-material-kit';


class DForm extends React.Component {
  static propTypes = {
    schema: PropTypes.object,
    state: PropTypes.object,
    onChange: PropTypes.func,
  }

  static defaultProps = {

  }

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.inputFactories = {
      'boolean': this.booleanInputFactory.bind(this),
      'string': this.stringInputFactory.bind(this),
    }
  }

  booleanInputFactory(args) {
    return (
      <View key={args.id} style={styles.row}>
        <Text style={styles.label}>
          {args.label}
        </Text>
        <MKSwitch
            checked={this.props.state[args.id]}
            onCheckedChange={v => this.onChange(args.id, v.checked)}
            placeholder={args.label} />
      </View>
    );
  }

  stringInputFactory(args) {
    return (
      <View key={args.id} style={styles.textInputWrapper}>
      <MKTextField
          key={args.id}
          autoCorrect={false}
          value={this.props.state[args.id]}
          onChangeText={v => this.onChange(args.id, v)}
          floatingLabelEnabled={true}
          textInputStyle={styles.textInput}
          placeholder={args.label} />
      </View>
    );
  }

  onChange(id, newValue) {
    this.props.onChange({
      ...this.props.state,
      [id]: newValue,
    })
  }

  render() {
    const { schema, state } = this.props

    return (
      <View style={{padding: 20, }}>
        { renderForm(state, schema, this.inputFactories) }
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
