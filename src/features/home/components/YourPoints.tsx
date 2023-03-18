/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Colors from '../../shared/colors';
import {Container, SizedBox} from '../../shared/components';
import Sizes from '../../shared/sizes';
import TextStyles from '../../shared/textstyles';
import {useSelector} from 'react-redux';
import {AppStore} from '../../../redux/store';
import {Product} from '../../../modules/products';
import {useTranslation} from 'react-i18next';
import Carousel from 'react-native-reanimated-carousel';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {getUniqueMonths} from '../../../utils/dates';
import {format} from 'date-fns';
import MovementLoader from '../../shared/loaders/movements_loader';
import {useFilterStateContext} from '../contexts/FilterStateContext';
import BalanceLoader from '../../shared/loaders/balance_loader';

const YourPoints: FC = () => {
  const {t} = useTranslation();
  const {width} = Dimensions.get('window');

  const {products, memoryProducts} = useSelector(
    (state: AppStore) => state.products,
  );
  const {filterData, filter} = useFilterStateContext();
  const [selectedDate, setSelectedDate] = useState<Date>();

  const months = getUniqueMonths(memoryProducts ?? []);

  useEffect(() => {
    filter({
      type: filterData.type,
      date: selectedDate || null,
    });
  }, [selectedDate]);

  useEffect(() => {
    if (months.length > 0) {
      setSelectedDate(months[0]);
    }
  }, [memoryProducts]);

  return (
    <View>
      <Text style={TextStyles.subtitle}>{t('your_points')}</Text>
      <SizedBox height={Sizes.normal} />
      {memoryProducts == null ? (
        <MovementLoader />
      ) : (
        <GestureHandlerRootView>
          <Carousel
            vertical={false}
            loop
            width={width * 0.75}
            height={143}
            style={styles.carousel}
            data={months}
            scrollAnimationDuration={1000}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            onSnapToItem={index => {
              return setSelectedDate(months[index]);
            }}
            renderItem={({index, item}) => (
              <Container horizontal={20} vertical={20} style={styles.card}>
                <Text style={styles.title}>{format(item, 'MMMM yyyy')}</Text>
                <SizedBox height={9} />
                {item.getTime() !== selectedDate?.getTime() ? (
                  <View style={styles.balanceLoader}>
                    <BalanceLoader />
                  </View>
                ) : (
                  <View style={styles.pointsSection}>
                    <Text style={styles.pointsNumber}>
                      {parseNumberToFixed(totalPoints(products))}
                    </Text>
                    <Text style={styles.pointsText}> pts</Text>
                  </View>
                )}
                <View />
              </Container>
            )}
          />
        </GestureHandlerRootView>
      )}
    </View>
  );
};

const totalPoints = (products: Product[]): number => {
  return products.reduce((total, product) => {
    if (product.isRedemption) {
      return total - product.points;
    }
    return total + product.points;
  }, 0);
};
const parseNumberToFixed = (number: number): String => {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const styles = StyleSheet.create({
  carousel: {alignSelf: 'center'},
  card: {
    alignSelf: 'center',
    backgroundColor: Colors.blue,
    width: 286,
    height: 143,
    borderRadius: 20,
    marginHorizontal: 20,
    // justifyContent: 'space-between',
  },
  title: {
    color: Colors.white,
    fontSize: Sizes.normal,
    fontWeight: '800',
  },
  pointsSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  pointsNumber: {
    color: Colors.white,
    fontWeight: '800',
    fontSize: Sizes.extraBig,
  },
  pointsText: {
    color: Colors.white,
    fontWeight: '800',
    fontSize: Sizes.big,
  },
  balanceLoader: {alignSelf: 'center', marginTop: 20},
});
export default YourPoints;
