import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../shared/colors';
import {Container, SizedBox} from '../../shared/components';
import Sizes from '../../shared/sizes';
import TextStyles from '../../shared/textstyles';
import {useSelector} from 'react-redux';
import {AppStore} from '../../../redux/store';
import {Product} from '../../../modules/products';

const YourPoints: FC = () => {
  const {products: filteredProducts} = useSelector(
    (state: AppStore) => state.products,
  );

  const month = 'December';

  return (
    <View>
      <Text style={TextStyles.subtitle}>TUS PUNTOS</Text>
      <SizedBox height={Sizes.normal} />
      <Container horizontal={20} vertical={20} style={styles.card}>
        <Text style={styles.title}>{month}</Text>
        <SizedBox height={9} />
        <View style={styles.pointsSection}>
          <Text style={styles.pointsNumber}>
            {parseNumberToFixed(totalPoints(filteredProducts))}
          </Text>
          <Text style={styles.pointsText}> pts</Text>
        </View>
        <View />
      </Container>
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
  card: {
    alignSelf: 'center',
    backgroundColor: Colors.blue,
    width: 286,
    height: 143,
    borderRadius: 20,
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
});
export default YourPoints;
