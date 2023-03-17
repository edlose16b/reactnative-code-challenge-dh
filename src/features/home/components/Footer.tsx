/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import {
  FilterOptions,
  useFilterStateContext,
} from '../contexts/FilterStateContext';
import {useDispatch} from 'react-redux';
import {filterProducts} from '../../../redux/states/products';

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
  const dispatch = useDispatch();
  const {filterData, filter} = useFilterStateContext();

  useEffect(() => {
    dispatch(filterProducts(filterData));
  }, [filterData]);

  return <View>{_buildButtonsByFilter(filterData, filter)}</View>;
};

const _buildButtonsByFilter = (options: FilterOptions, filter: Function) => {
  if (options !== FilterOptions.ALL) {
    return (
      <Button
        onPress={() => {
          filter(FilterOptions.ALL);
        }}
        title="Todos"
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }

  return (
    <View style={styles.buttonsSection}>
      <View style={styles.buttonWidthSection}>
        <Button
          onPress={() => {
            filter(FilterOptions.WON);
          }}
          title="Ganados"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={styles.buttonWidthSection}>
        <Button
          onPress={() => {
            filter(FilterOptions.redeemed);
          }}
          title="Canjeados"
          accessibilityLabel="Learn more about this purple button"
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
