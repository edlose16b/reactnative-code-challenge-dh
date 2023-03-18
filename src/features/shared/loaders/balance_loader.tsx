import React, {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

/**
 * It renders a placeholder loader
 */
const BalanceLoader = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{alignItems: 'center'}} testID="loader-id">
      <ShimmerPlaceholder LinearGradient={LinearGradient} />
    </View>
  );
};

export default BalanceLoader;
