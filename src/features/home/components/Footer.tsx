/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import {
  FilterOptionsType,
  useFilterStateContext,
} from '../contexts/FilterStateContext';
import {useDispatch} from 'react-redux';
import {filterProducts} from '../../../redux/states/products';
import Colors from '../../shared/colors';
import {useTranslation} from 'react-i18next';

type SelectOptionTypeFunction = (type: FilterOptionsType) => void;
type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {filterData, filter} = useFilterStateContext();

  useEffect(() => {
    dispatch(filterProducts(filterData));
  }, [filterData]);

  return (
    <View>
      {_buildButtonsByFilter(
        filterData.type,
        type => {
          filter({date: filterData.date, type});
        },
        t,
      )}
    </View>
  );
};

const _buildButtonsByFilter = (
  options: FilterOptionsType,
  filter: SelectOptionTypeFunction,
  t: Function,
) => {
  if (options !== FilterOptionsType.ALL) {
    return (
      <Button
        onPress={() => {
          filter(FilterOptionsType.ALL);
        }}
        title={'' + t('all')}
        accessibilityLabel={'' + t('all')}
        buttonStyle={{backgroundColor: Colors.blue}}
      />
    );
  }

  return (
    <View style={styles.buttonsSection}>
      <View style={styles.buttonWidthSection}>
        <Button
          onPress={() => {
            filter(FilterOptionsType.WON);
          }}
          title={'' + t('won')}
          accessibilityLabel={'' + t('won')}
          buttonStyle={{backgroundColor: Colors.blue}}
        />
      </View>
      <View style={styles.buttonWidthSection}>
        <Button
          onPress={() => {
            filter(FilterOptionsType.redeemed);
          }}
          title={'' + t('redeemed')}
          accessibilityLabel={'' + t('redeemed')}
          buttonStyle={{backgroundColor: Colors.blue}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonWidthSection: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Footer;
