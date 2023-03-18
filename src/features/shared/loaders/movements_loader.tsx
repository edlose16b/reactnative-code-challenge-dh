import React, {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {SizedBox} from '../components';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const MovementLoader = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{alignItems: 'center'}} testID="movement-loader-id">
      <ShimmerPlaceholder LinearGradient={LinearGradient} />
      <SizedBox height={20} />
      <ShimmerPlaceholder LinearGradient={LinearGradient} />
    </View>
  );
};

export default MovementLoader;
