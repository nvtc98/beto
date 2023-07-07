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
import {ActivityIndicator, Button, TextInput} from 'react-native-paper';
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
import {Formik} from 'formik';
import {DatePickerModal} from 'react-native-paper-dates';

export default function Edit({
  navigation,
  route: {
    params: {data},
  },
}) {
  console.log('data', data);
  const onBack = () => {
    navigation.pop();
  };

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
          <Icon name="close" size={normalize(30)} onPress={onBack} />
        </View>
        <View style={styles.mainContainer}>
          <Formik
            initialValues={{Category: '', Amount: '', Date: '', Note: ''}}
            onSubmit={values => console.log(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <TextInput
                  label="Amount"
                  onChangeText={handleChange('Amount')}
                  onBlur={handleBlur('Amount')}
                  value={values.Amount}
                  selectionColor={mainGradientColor3}
                  activeUnderlineColor={mainGradientColor3}
                  style={styles.textInput}
                  inputMode="numeric"
                />
                <TextInput
                  label="Category"
                  onChangeText={handleChange('Category')}
                  onBlur={handleBlur('Category')}
                  value={values.Category}
                  selectionColor={mainGradientColor3}
                  activeUnderlineColor={mainGradientColor3}
                  style={styles.textInput}
                />
                {/* <TextInput
                  label="Date"
                  onChangeText={handleChange('Date')}
                  onBlur={handleBlur('Date')}
                  value={values.Date}
                  selectionColor={mainGradientColor3}
                  activeUnderlineColor={mainGradientColor3}
                  style={styles.textInput}
                /> */}
                <DatePickerModal
                  mode="single"
                  visible={true}
                  onDismiss={() => {}}
                  // date={''}
                  onConfirm={() => {}}
                />
                <TextInput
                  label="Note"
                  onChangeText={handleChange('Note')}
                  onBlur={handleBlur('Note')}
                  value={values.Note}
                  selectionColor={mainGradientColor3}
                  activeUnderlineColor={mainGradientColor3}
                  style={styles.textInput}
                  multiline
                />
                <View style={styles.footerContainer}>
                  <Button
                    mode="text"
                    onPress={onBack}
                    textColor={mainGradientColor3}
                    style={{flex: 4}}>
                    Hủy
                  </Button>
                  <Button
                    mode="contained-tonal"
                    dark
                    onPress={handleSubmit}
                    style={{backgroundColor: mainGradientColor3, flex: 6}}>
                    Quất
                  </Button>
                </View>
              </View>
            )}
          </Formik>
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
  textInput: {backgroundColor: darkWhiteColor},
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacingLarger,
    // width: '90%',
    // alignSelf: 'center',
  },
});
