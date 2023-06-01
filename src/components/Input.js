import React from 'react';
import {StyleSheet} from 'react-native';
import { TextInput} from 'react-native-paper';

const Input = (props) => {
  return(
    <TextInput
        style={styles.input}
        mode="outlined"
        theme={{ colors: {primary: '#495057'}}}
        {...props}        
      />
  );
};

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#FFF',
    marginBottom:8
  },
});

export default Input;