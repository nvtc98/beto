import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {fontSizeLarge, mainColor, whiteColor} from '../constants/style';
import normalize from 'react-native-normalize';

export default Title = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: normalize(40),
    backgroundColor: mainColor,
  },
  text: {
    color: whiteColor,
    fontWeight: 'bold',
    fontSize: fontSizeLarge,
  },
});
