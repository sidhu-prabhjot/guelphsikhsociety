import React from 'react';
import {View, TextInput, Text} from 'react-native';

//when the Input component is used, a label, value, and onChangeText prop has to be passed into it
const SuggestionInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.containerStyle}>
      {/*The label that is passed, is then dispplayed as text. The label
      can be anything(Email, password etc.)*/}
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        /*secureTextEntry will make the text in the input appear as dots for security.
          Also, this any boolean, if true, can does not have to be written boolean={true}.
          Instead, it can just be written boolean*/
        /*since, a prop is being passed to secureTextEntry, it has to be secureTextEntry={PropName}.
        {secureTextEntry} which is the prop will come in as true or false, therefore completing the
        boolean statement*/
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        //turns off autocorrect
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export {SuggestionInput};
