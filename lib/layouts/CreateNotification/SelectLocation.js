import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native';
import { Field } from 'redux-form';
import Icon from 'react-native-vector-icons/Entypo';

import {
  flxRow,
  flxCol,
  margin,
  padding,
  text,
  aic,
  jcc,
  white,
  slate,
  greyDk,
  grey400,
  red,
  blue500,
  blue300,
  green,
  jcsb
} from '../../styles';

import ModalHeader from '../../components/ModalHeader';
import ModalFieldArray from '../../components/ModalFieldArray';
import SelectLocation from '../../components/SelectLocation';
import ExitButton from '../../components/SelectLocation/ExitButton';

export const Location = ({ value, onPress, input }) => (
  <TouchableOpacity
    style={[flxRow, blue300.bg, aic, jcsb, margin.a5, padding.x5, {height: 45, minWidth: 35, borderRadius: 20}]}
    onPress={onPress}
  >
    <Text style={[white.text, margin.x5]}>
      {input.value.name}
    </Text>
    <Icon
      style={[margin.x5]}
      name="cross"
      size={18}
      color={white.color}
    />
  </TouchableOpacity>
)

export const LocationAdd = ({ onPress }) => (
  <TouchableOpacity
    style={[green.bg, aic, jcc, margin.a5, {height: 45, width: 45, borderRadius: 27}]}
    onPress={onPress}
  >
    <Icon
      name="plus"
      size={20}
      color={white.color}
    />
  </TouchableOpacity>
)

export const Opener = ({ fields, toggle }) => (
  <View
    style={[white.bg, flxRow, aic, grey400.bc, padding.x5, {flexWrap: 'wrap'}]}
  >
    {
      fields.map((field, index) => (
        <Field
          onPress={() => fields.remove(index)}
          key={index}
          name={field}
          component={Location}
        />
      ))
    }
    <LocationAdd onPress={toggle} />
  </View>
)

export const SelectLocationModal = ({ label, options, ...props }) => (
  <ModalFieldArray
    {...props}
    renderValue={(toggle, fields) => <Opener fields={fields} toggle={toggle} />}
    renderModal={(toggle, { fields }) => (
      <View>
        <ModalHeader value={label} />
        <SelectLocation
          options={options}
          toggle={toggle}
          onPress={fields.push}
        />
        <ExitButton onPress={toggle} />
      </View>
    )}
  />
)

export default SelectLocationModal