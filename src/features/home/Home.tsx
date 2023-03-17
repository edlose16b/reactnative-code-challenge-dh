import React, {FC, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Colors from '../shared/colors';
import {Container, SizedBox} from '../shared/components';
import Footer from './components/Footer';
import YourMovements from './components/YourMovements';
import YourPoints from './components/YourPoints';
import {fetchProducts} from '../../redux/states/products';
import {useDispatch} from 'react-redux';
import type {} from 'redux-thunk/extend-redux';

type HomeViewProps = {};
const HomeView: FC<HomeViewProps> = _ => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Container>
        <View>{_buildHi()}</View>
        <SizedBox height={20} />
        <YourPoints />
        <SizedBox height={20} />
        <YourMovements />
        <SizedBox height={20} />
        <Footer />
      </Container>
    </ScrollView>
  );
};

const _buildHi = () => {
  return (
    <View>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text>Rubén Rodriguez</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 16,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeView;
