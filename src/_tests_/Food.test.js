import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Food from '../components/Food';

describe('Testing Filter with static router', () => {
  it('Food component is defined', async () => {
    const component = render(
      <StaticRouter>
        <Food ele={{}} />
      </StaticRouter>,
    );
    expect(component).toBeDefined();
  });

  it('Food snapshot testing', () => {
    const food = renderer.create(
      <StaticRouter>
        <Food ele={{}} />
      </StaticRouter>,
    ).toJSON();
    expect(food).toMatchSnapshot();
  });
});
