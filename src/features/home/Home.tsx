import React, {FC, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import Colors from '../shared/colors';
import {Container, SizedBox} from '../shared/components';
import Footer from './components/Footer';
import YourMovements from './components/YourMovements';
import YourPoints from './components/YourPoints';
import {fetchProducts} from '../../redux/states/products';
import {useDispatch} from 'react-redux';
import type {} from 'redux-thunk/extend-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

type HomeViewProps = {};
const HomeView: FC<HomeViewProps> = _ => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
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
    </SafeAreaView>
  );
};

const _buildHi = () => {
  const {t} = useTranslation();

  return (
    <View>
      <Text style={styles.title}>{t('welcome_back')}</Text>
      <Text>Equipo de Reclutadores</Text>
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
