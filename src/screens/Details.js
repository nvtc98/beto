import React, {useEffect, useState, useRef} from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActivityIndicator} from 'react-native-paper';
import normalize from 'react-native-normalize';
import {
  blackColor,
  borderRadiusNormal,
  darkWhiteColor,
  fontSizeImpressive,
  fontSizeLarge,
  fontSizeVeryLarge,
  greenColor,
  mainGradientColor1,
  mainGradientColor2,
  mainGradientColor3,
  redColor,
  spacingLarge,
  spacingLarger,
  spacingNormal,
  spacingSmall,
  spacingSmaller,
  whiteColor,
} from '../constants/style';
import useSheet from '../hooks/useSheet';
import useDate from '../hooks/useDate';
import {formatMoney} from '../utils/number';
import FixedHeader from '../components/FixedHeader';
import LinearGradient from 'react-native-linear-gradient';
import AnimatedHeader from '../components/AnimatedHeader';
import Transactions from '../components/Transactions';
import _ from 'lodash';
import {getMonthYearOfDate} from '../utils/date';

export default function Details({
  navigation,
  route: {
    params: {data},
  },
}) {
  console.log('data', data);

  const renderRow = (icon, text) => (
    <View style={[styles.row, {marginBottom: spacingNormal}]}>
      <Icon name={icon} size={normalize(30)} />
      <Text style={styles.rowItemText}>{text}</Text>
    </View>
  );

  return (
    <LinearGradient
      colors={[mainGradientColor3, mainGradientColor1]}
      style={styles.backgroundContainer}>
      <View style={styles.container}>
        <View style={styles.topBarContainer}>
          <Icon
            name="pencil"
            size={normalize(32)}
            onPress={() => navigation.push('Edit', {data})}
            style={{marginRight: spacingSmall}}
          />
          <Icon
            name="close"
            size={normalize(36)}
            onPress={() => navigation.pop()}
          />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.row}>
            <View style={styles.categoryIconContainer}>
              <Icon name="rocket" size={normalize(48)} color={whiteColor} />
            </View>
            <Text
              style={[
                styles.moneyText,
                {
                  // color: data.Amount > 0 ? greenColor : redColor,
                  color: mainGradientColor3,
                },
              ]}>
              {formatMoney(data.Amount)}
            </Text>
          </View>
          <Text style={styles.noteText}>{data.Note}</Text>
          <View>
            {renderRow('shape', data.Category)}
            {renderRow('calendar-range', data.Date)}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: darkWhiteColor,
    margin: spacingNormal,
    padding: spacingLarger,
    borderRadius: borderRadiusNormal,
  },
  mainContainer: {
    margin: spacingLarge,
    marginTop: spacingLarger,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteText: {
    marginVertical: normalize(40),
    fontSize: fontSizeLarge,
    textAlign: 'center',
    color: mainGradientColor3,
  },
  moneyText: {
    fontSize: fontSizeImpressive,
    fontWeight: 'bold',
    marginLeft: spacingLarger,
  },
  categoryIconContainer: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: borderRadiusNormal,
    backgroundColor: mainGradientColor3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowItemText: {
    marginLeft: spacingLarge,
    fontSize: fontSizeLarge,
  },
  topBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
