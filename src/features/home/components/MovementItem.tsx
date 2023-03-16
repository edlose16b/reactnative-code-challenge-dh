import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Product} from '../../../modules/products';
import {SizedBox} from '../../shared/components';
import Sizes from '../../shared/sizes';

type MovementItemProps = {
  product: Product;
};

const MovementItem: FC<MovementItemProps> = ({product}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: product.image}} style={styles.image} />
        <View>
          <Text>{product.product}</Text>
          <Text>{product.createdAt.toString()}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>+</Text>
        <Text>{product.points}</Text>
        <SizedBox width={Sizes.small} />
        <Text>{'>'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: 55, height: 55, borderRadius: 10},
});

export default MovementItem;
