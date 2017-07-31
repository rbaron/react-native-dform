import PropTypes from 'prop-types'
import React from 'react'
import { Platform, Text, View } from 'react-native'
import DatePicker from 'react-native-datepicker'

import styles from '../styles'


const customStyles = {
  dateInput: {
    borderColor: '#ddd',
    borderWidth: 0,
    borderBottomWidth: 2,
  },
}

class DateInput extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    keyExtractor: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
  }

  render() {
    const { field, keyExtractor, value, onChange } = this.props
    const key = keyExtractor(field)

    return (
      <View key={key} style={[styles.inputWrapper, styles.booleanInputWrapper]}>
        <View style={styles.row}>
          <Text style={styles.label}>
            {field.label}
          </Text>
          <DatePicker
            cancelBtnText='Cancel'
            confirmBtnText='OK'
            customStyles={customStyles}
            date={value}
            placeholder={field.placeholder || field.label}
            format={field.format || 'YYYY-MM-DD'}
            mode='date'
            showIcon={false}
            onDateChange={d => onChange(key, d)}
          />
        </View>
      </View>
    )
  }
}

export { DateInput }
