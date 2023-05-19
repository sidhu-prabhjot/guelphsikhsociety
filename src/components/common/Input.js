import React from 'react';
import {View, TextInput, Text} from 'react-native';

//when the Input component is used, a label, value, and onChangeText prop has to be passed into it
const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  multiline,
  inputStyle,
  keyboardType,
  maxLength,
  labelStyle,
}) => {
  return (
    <View style={styles.containerStyle}>
      {/*The label that is passed, is then dispplayed as text. The label
      can be anything(Email, password etc.)*/}
      <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
      <TextInput
        /*secureTextEntry will make the text in the input appear as dots for security.
          Also, this any boolean, if true, can does not have to be written boolean={true}.
          Instead, it can just be written boolean*/
        /*since, a prop is being passed to secureTextEntry, it has to be secureTextEntry={PropName}.
        {secureTextEntry} which is the prop will come in as true or false, therefore completing the
        boolean statement*/
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor="#C0C0C0"
        //turns off autocorrect
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={[styles.inputStyle, inputStyle]}
        multiline={multiline}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000000',
    fontSize: 18,
    lineHeight: 23,
    flex: 3,
  },
  labelStyle: {
    fontSize: 18,
    paddingRight: 8,
    flex: 1.5,
    color: '#000000',
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export {Input};
