import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {format} from 'date-fns';

import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import {Product} from '../../../modules/products';
import Colors from '../../shared/colors';
import {SizedBox} from '../../shared/components';
import Sizes from '../../shared/sizes';

type MovementItemProps = {
  product: Product;
};

const MovementItem: FC<MovementItemProps> = ({product}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <ListItem
      key={product.id}
      onPress={() => {
        navigation.navigate('Product', {product});
      }}>
      <Avatar
        source={{uri: product.image}}
        avatarStyle={styles.avatarBorder}
        size={55}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.bold}>{product.product}</ListItem.Title>
        <ListItem.Subtitle style={{}}>
          {format(Date.parse(product.createdAt.toString()), 'dd MMMM, yyyy')}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem containerStyle={styles.listItem}>
        <View style={styles.points}>
          {_buildSignalByRedeption(product.isRedemption)}
          <SizedBox width={5} />
          <Text style={styles.pointsText}>{product.points}</Text>
        </View>

        <Text style={styles.icon}>{'>'}</Text>
      </ListItem>
    </ListItem>
  );
};

const _buildSignalByRedeption = (isRedeption: boolean) => {
  const color = !isRedeption ? Colors.green : Colors.red;

  return (
    <Text style={{...styles.bold, color: color}}>
      {!isRedeption ? '+' : '-'}
    </Text>
  );
};

const styles = StyleSheet.create({
  avatarBorder: {borderRadius: 10},
  points: {flexDirection: 'row'},
  image: {width: 55, height: 55, borderRadius: 10},
  bold: {fontWeight: 'bold'},
  pointsText: {fontWeight: 'bold', fontSize: Sizes.normal},
  icon: {fontWeight: 'bold', fontSize: 18},
  listItem: {backgroundColor: 'transparent'},
});

export default MovementItem;
