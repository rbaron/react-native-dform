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

class DateTimeInput extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    format: PropTypes.string.isRequired,
    keyExtractor: PropTypes.func.isRequired,
    mode: PropTypes.oneOf(['date', 'time']).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
  }

  render() {
    const { field, format, keyExtractor, mode, value, onChange } = this.props
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
            format={format}
            is24Hour={true}
            mode={mode}
            showIcon={false}
            onDateChange={d => onChange(key, d)}
          />
        </View>
      </View>
    )
  }
}

class DateInput extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    keyExtractor: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
  }

  render() {
    return <DateTimeInput
              {...this.props}
              format={this.props.field.format || 'YYYY-MM-DD'}
              mode='date' />
  }
}

class TimeInput extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    keyExtractor: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
  }

  render() {
    return <DateTimeInput
              {...this.props}
              format={this.props.field.format || 'HH:mm'}
              mode='time' />
  }
}

export { DateInput, TimeInput }
