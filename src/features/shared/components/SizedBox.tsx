import React, {FC} from 'react';
import {View} from 'react-native';

type SizedBoxProps = {
  height?: number;
  width?: number;
};

/**
 * It renders a View with default spacing
 * Inspired by Flutter SizedBox
 */
const SizedBox: FC<SizedBoxProps> = ({height, width}) => {
  return <View style={{height: height ?? 0, width: width ?? 0}} />;
};

export default SizedBox;
