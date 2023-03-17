import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import {
  FilterOptions,
  useFilterStateContext,
} from '../contexts/FilterStateContext';

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
  const {filter, setFilter} = useFilterStateContext();
  return <>{_buildButtonsByFilter(filter, setFilter)}</>;
};

const _buildButtonsByFilter = (options: FilterOptions, setFilter: Function) => {
  if (options !== FilterOptions.ALL) {
    return (
      <Button
        onPress={() => {
          console.log('gaa');
          setFilter(FilterOptions.ALL);
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
            console.log('gaa');
            setFilter(FilterOptions.WON);
          }}
          title="Ganados"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={styles.buttonWidthSection}>
        <Button
          onPress={() => {
            console.log('gaa');
            setFilter!(FilterOptions.redeemed);
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
