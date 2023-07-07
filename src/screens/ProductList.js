import React, {useEffect, useState, useRef} from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActivityIndicator, Card} from 'react-native-paper';
import normalize from 'react-native-normalize';
import {
  blackColor,
  borderRadiusNormal,
  darkWhiteColor,
  fontSizeImpressive,
  fontSizeLarge,
  fontSizeVeryLarge,
  greenColor,
  highlightColor,
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
import useDate from '../hooks/useDate';
import {formatMoney} from '../utils/number';
import FixedHeader from '../components/FixedHeader';
import LinearGradient from 'react-native-linear-gradient';
import AnimatedHeader from '../components/AnimatedHeader';
import Transactions from '../components/Transactions';
import _ from 'lodash';
import {getMonthYearOfDate} from '../utils/date';
import {useSheet} from '../hooks/useSheetContext';
import Title from '../components/Title';
import constants from '../constants';

const {category, id, name, note} = constants.googleapis.tab.product.field;

export default function ProductList({navigation}) {
  const {productList} = useSheet();

  const renderGap = () => <View style={{height: spacingLarge}} />;

  const renderItemItem = (icon, value) => (
    <View style={styles.itemItemContentContainer}>
      <Icon name={icon} size={normalize(20)} />
      <Text>{value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Title text="Sản phẩm" />
      <View style={{backgroundColor: darkWhiteColor, flex: 1}}>
        <FlatList
          data={productList}
          renderItem={({item}) => {
            return (
              <Card style={styles.itemContainer}>
                <Card.Title
                  title={item[name]}
                  titleNumberOfLines={3}
                  titleStyle={styles.itemTitle}
                />
                <Card.Content style={styles.itemContentContainer}>
                  {renderItemItem('shape', item[category])}
                  {renderItemItem(
                    'arrow-bottom-right-bold-box-outline',
                    '250.000đ',
                  )}
                  {renderItemItem(
                    'arrow-top-right-bold-box-outline',
                    '300.000đ',
                  )}
                </Card.Content>
              </Card>
            );
          }}
          ItemSeparatorComponent={renderGap}
          ListHeaderComponent={renderGap}
          ListFooterComponent={renderGap}
          keyExtractor={item => item[id]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: whiteColor,
    marginHorizontal: spacingLarge,
  },
  itemTitle: {
    fontWeight: 'bold',
    color: highlightColor,
    marginTop: spacingSmall,
  },
  itemContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemItemContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
