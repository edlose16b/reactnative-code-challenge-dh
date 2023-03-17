import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Image, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {} from 'redux-thunk/extend-redux';
import {Product} from '../../modules/products';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import Colors from '../shared/colors';
import Sizes from '../shared/sizes';
import {Container, SizedBox} from '../shared/components';
import {Dimensions} from 'react-native';
import {format} from 'date-fns';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TextStyles from '../shared/textstyles';

type ProductViewProps = {
  route: RouteProp<{params: {product: Product}}, 'params'>;
};
const {height} = Dimensions.get('window');

const ProductView: FC<ProductViewProps> = ({route}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const product = route.params.product;

  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Text style={styles.topTitle}>{product.product}</Text>
      </View>
      <Container style={styles.containerStyle}>
        <View>
          <Image source={{uri: product.image}} style={styles.image} />
          <SizedBox height={Sizes.extraBig} />

          <Text style={TextStyles.subtitle}>Detalles del producto:</Text>
          <SizedBox height={19} />
          <Text style={styles.textDate}>
            {'Comprado el ' +
              format(Date.parse(product.createdAt.toString()), 'dd MMMM, yyyy')}
          </Text>
          <SizedBox height={Sizes.big} />
          <Text style={TextStyles.subtitle}>
            {getTextByRedemption(product.isRedemption)}
          </Text>
          <SizedBox height={19} />
          <Text style={styles.textPoints}>{product.points + ' puntos'}</Text>
          <SizedBox height={Sizes.big} />
        </View>

        <Button
          title={'Aceptar'}
          onPress={() => navigation.pop()}
          buttonStyle={{backgroundColor: Colors.blue}}
        />
      </Container>
    </SafeAreaView>
  );
};

const getTextByRedemption = (isRedemption: boolean) => {
  return isRedemption
    ? 'Con esta compra canjeaste:'
    : 'Con esta compra acumulaste:';
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'space-around',
    height: height * 0.8,
  },
  image: {width: '100%', height: height * 0.3, resizeMode: 'contain'},
  top: {
    backgroundColor: Colors.lightPurple,
    height: height * 0.18,
    paddingHorizontal: Sizes.normal,
    justifyContent: 'flex-end',
    paddingBottom: Sizes.big,
  },
  textDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  topTitle: {
    fontWeight: 'bold',
    fontSize: Sizes.big,
  },
  textPoints: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProductView;
