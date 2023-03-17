import {TextStyle} from 'react-native';
import Colors from './colors';

export default class TextStyles {
  static subtitle: TextStyle = {
    color: Colors.gray,
    fontSize: 14,
    fontWeight: '800',
  };

  static textBold: TextStyle = {
    fontWeight: 'bold',
  };
}
