import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TextInput, View, Picker, Platform } from 'react-native'
import ModalPicker from 'react-native-modal-picker'

import {
  MKColor,
  MKSwitch,
  MKTextField,
} from 'react-native-material-kit';

import styles from '../styles'


class OptionsInput extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    keyExtractor: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
  }

  render() {
    const { field, keyExtractor, value, onChange } = this.props
    const key = keyExtractor(field)
    if (Platform.OS === 'android') {
      const optsWithUndef = [{
        label: field.label,
        key: 'undef',
        value: undefined,
      }, ...field.options]

      const data = optsWithUndef.map(opt => (
        <Picker.Item
            key={keyExtractor(opt)}
            label={opt.label}
            value={keyExtractor(opt)} />
      ))

      return (
        <View key={key} style={styles.inputWrapper}>
          <Text style={styles.label}>{field.label}</Text>
          <Picker
              selectedValue={value}
              onValueChange={val => onChange(key, val)}>
            {data}
          </Picker>
        </View>
      )
    } else {
      const data = field.options.map(opt => ({
        ...opt,
        key: keyExtractor(opt),
      }))

      return (
        <View key={key} style={styles.inputWrapper}>
          <ModalPicker
              data={data}
              onChange={opt => onChange(key, opt.key)}
          >
          <MKTextField
              autoCorrect={field.autocorrect || false}
              value={value}
              editable={false}
              floatingLabelEnabled={true}
              style={styles.textField}
              placeholder={field.label} />
          </ModalPicker>
        </View>
      )
    }
  }
}

export { OptionsInput }
