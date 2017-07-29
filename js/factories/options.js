import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
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
    const data = field.options.map(opt => ({
      ...opt,
      key: keyExtractor(opt),
    }))

    return (
      <View key={key} style={[styles.textInputWrappers]}>
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

export { OptionsInput }
