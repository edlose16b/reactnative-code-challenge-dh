import React, {FC} from 'react';
import {View} from 'react-native';

type SizedBoxProps = {
  height?: number;
  width?: number;
};

const SizedBox: FC<SizedBoxProps> = ({height, width}) => {
  return <View style={{height: height ?? 0, width: width ?? 0}} />;
};

export default SizedBox;
