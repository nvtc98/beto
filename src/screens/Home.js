import React, {useEffect, useState, useRef} from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import {ActivityIndicator, Button, IconButton} from 'react-native-paper';
import {
  blackColor,
  borderRadiusLarge,
  borderRadiusNormal,
  borderRadiusSmall,
  darkWhiteColor,
  fontSizeLarge,
  fontSizeVeryLarge,
  greenColor,
  mainColor,
  mainGradientColor1,
  mainGradientColor2,
  mainGradientColor3,
  redColor,
  spacingNormal,
  spacingSmall,
  whiteColor,
} from '../constants/style';
import useSheet from '../hooks/useSheet';
import FixedHeader from '../components/FixedHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import normalize from 'react-native-normalize';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topViewContainer}>
        <View style={styles.topInformationContainer}>
          <Text
            style={{
              color: whiteColor,
              fontSize: fontSizeVeryLarge,
              fontWeight: 'bold',
            }}>
            2.050.000đ
          </Text>
          <View>
            <Text style={{color: whiteColor}}>Tồn: 250.000đ</Text>
            <Text style={{color: whiteColor}}>Lãi: 300.000đ</Text>
          </View>
        </View>
        <View style={styles.actionViewContainer}>
          {['Sản phẩm', 'Nhập hàng', 'Đơn hàng', 'Thống kê'].map(item => (
            <Button onPress={() => navigation.push('ProductList')}>
              <View style={styles.actionItemContainer}>
                <Icon name="rocket" color={whiteColor} size={normalize(30)} />
                <Text style={{color: whiteColor}}>{item}</Text>
              </View>
            </Button>
          ))}
        </View>
        {/* <View style={{height: 100}} /> */}
      </View>
      {false ? null : <ActivityIndicator color={whiteColor} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topViewContainer: {
    backgroundColor: mainColor,
    overflow: 'hidden',
    borderBottomLeftRadius: borderRadiusLarge,
    borderBottomRightRadius: borderRadiusLarge,
  },
  topInformationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  actionViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacingNormal,
  },
  actionItemContainer: {
    alignItems: 'center',
  },
});
