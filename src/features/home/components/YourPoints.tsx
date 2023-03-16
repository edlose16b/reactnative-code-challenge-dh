import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../shared/colors';
import {Container, SizedBox} from '../../shared/components';
import Sizes from '../../shared/sizes';
import TextStyles from '../../shared/textstyles';

const YourPoints: FC = () => {
  const month = 'December';
  const points = 10000;
  return (
    <View>
      <Text style={TextStyles.subtitle}>TUS PUNTOS</Text>
      <SizedBox height={Sizes.normal} />
      <Container horizontal={20} vertical={20} style={styles.card}>
        <Text style={styles.title}>{month}</Text>
        <SizedBox height={9} />
        <View style={styles.pointsSection}>
          <Text style={styles.pointsNumber}>
            {points.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
          </Text>
          <Text style={styles.pointsText}> pts</Text>
        </View>
        <View />
      </Container>
    </View>
  );
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
