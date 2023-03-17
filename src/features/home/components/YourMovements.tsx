import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {AppStore} from '../../../redux/store';
import {SizedBox} from '../../shared/components';
import TextStyles from '../../shared/textstyles';
import MovementItem from './MovementItem';

const YourMovements: FC = () => {
  const {products: filteredProducts} = useSelector(
    (state: AppStore) => state.products,
  );

  return (
    <View>
      <Text style={TextStyles.subtitle}>TUS MOVIMIENTOS</Text>
      <SizedBox height={20} />
      <FlatList
        data={filteredProducts}
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
