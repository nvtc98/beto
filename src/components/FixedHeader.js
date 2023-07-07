import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {fontSizeLarge, mainColor, whiteColor} from '../constants/style';
import normalize from 'react-native-normalize';

export default () => {
  return (
    <View style={styles.container}>
      {/* <IconButton icon={'plus-circle-outline'} iconColor={whiteColor} /> */}
      <View />
      <Image
        source={require('../assets/images/betoTextLogo.png')}
        style={{width: normalize(150)}}
        resizeMode="contain"
      />
      {/* <IconButton icon={'cog-outline'} iconColor={whiteColor} /> */}
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: mainColor,
  },
});
