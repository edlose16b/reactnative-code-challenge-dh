import React, {PropsWithChildren} from 'react';
import {View, ViewStyle} from 'react-native';
import Sizes from '../sizes';

type ContainerProps = {
  horizontal?: number;
  vertical?: number;
  style?: ViewStyle;
};
const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  style,
  children,
  horizontal,
  vertical,
}) => {
  return (
    <View
      style={{
        ...style,
        paddingHorizontal: horizontal ?? Sizes.normal,
        paddingVertical: vertical ?? Sizes.normal,
      }}>
      {children}
    </View>
  );
};

export default Container;
