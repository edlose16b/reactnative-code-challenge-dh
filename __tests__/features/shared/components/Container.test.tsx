import {render, screen} from '@testing-library/react-native';
import {Container} from '../../../../src/features/shared/components';
import React, {Text} from 'react-native';
import Sizes from '../../../../src/features/shared/sizes';

describe('Container', () => {
  test('should render a simple container ', () => {
    render(
      <Container>
        <Text>Hi</Text>
      </Container>,
    );
    const text = screen.getByText('Hi');
    const container = text.parent?.parent;

    expect(container).toHaveStyle({
      paddingHorizontal: Sizes.normal,
      paddingVertical: Sizes.normal,
    });
  });

  test('should render a simple container with default horizontal and vertical', () => {
    render(
      <Container horizontal={30}>
        <Text>Hi</Text>
      </Container>,
    );
    const text = screen.getByText('Hi');
    const container = text.parent?.parent;

    expect(container).toHaveStyle({
      paddingHorizontal: 30,
      paddingVertical: Sizes.normal,
    });
  });

  test('should render a container with custom styles', () => {
    render(
      <Container style={{backgroundColor: 'red'}}>
        <Text>Hi</Text>
      </Container>,
    );
    const text = screen.getByText('Hi');
    const container = text.parent?.parent;

    expect(container).toHaveStyle({
      backgroundColor: 'red',
    });
  });
});
