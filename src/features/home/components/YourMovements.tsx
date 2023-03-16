import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ProductModel} from '../../../modules/products/infraestructure/models/product_model';
import {SizedBox} from '../../shared/components';
import Sizes from '../../shared/sizes';
import TextStyles from '../../shared/textstyles';
import MovementItem from './MovementItem';

const YourMovements: FC = () => {
  const DATA = [
    ProductModel.fromJson({
      createdAt: '2022-12-09T06:34:25.607Z',
      product: 'Handmade Metal Shoes',
      points: 16434,
      image: 'https://loremflickr.com/640/480/transport',
      is_redemption: false,
      id: '1',
    }),
    ProductModel.fromJson({
      createdAt: '2022-12-09T17:02:51.904Z',
      product: 'Recycled Plastic Tuna',
      points: 92984,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: false,
      id: '2',
    }),
    ProductModel.fromJson({
      createdAt: '2022-12-09T10:20:00.909Z',
      product: 'Fantastic Granite Bacon',
      points: 42416,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: false,
      id: '3',
    }),
  ];

  return (
    <View>
      <Text style={TextStyles.subtitle}>TUS MOVIMIENTOS</Text>
      <SizedBox height={Sizes.normal} />
      <FlatList
        data={DATA}
        style={styles.containerList}
        renderItem={({item}) => <MovementItem product={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerList: {
    // backgroundColor: Colors.blue,
  },
});
export default YourMovements;
