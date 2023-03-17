import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {AppStore} from '../../../redux/store';
import {SizedBox} from '../../shared/components';
import TextStyles from '../../shared/textstyles';
import MovementItem from './MovementItem';
import {useTranslation} from 'react-i18next';
import MovementLoader from '../../shared/loaders/movements_loader';

const YourMovements: FC = () => {
  const {t} = useTranslation();
  const {products, memoryProducts} = useSelector(
    (state: AppStore) => state.products,
  );

  return (
    <View>
      <Text style={TextStyles.subtitle}>{t('your_movements')}</Text>
      <SizedBox height={20} />
      {memoryProducts == null ? (
        <MovementLoader />
      ) : (
        <FlatList
          data={products}
          style={styles.containerList}
          renderItem={({item}) => <MovementItem product={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerList: {
    // backgroundColor: Colors.blue,
  },
});
export default YourMovements;
