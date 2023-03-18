import {render, screen} from '@testing-library/react-native';
import React from 'react-native';
import {SizedBox} from '../../../../src/features/shared/components';

describe('SizedBox', () => {
  test('should render a simple SizedBox ', () => {
    render(<SizedBox />);
    const sizedBox = screen.root;
    expect(sizedBox).toHaveStyle({height: 0, width: 0});
  });
  test('should render a SizedBox with height and width ', () => {
    render(<SizedBox height={100} width={200} />);
    const sizedBox = screen.root;

    expect(sizedBox).toHaveStyle({height: 100, width: 200});
  });
});
