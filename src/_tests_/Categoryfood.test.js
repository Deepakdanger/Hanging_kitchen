import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Catagoryfood from '../components/Categoryfood';

describe('Testing Filter with static router', () => {
  it('Categoryfood component is defined', async () => {
    const component = render(
      <StaticRouter>
        <Catagoryfood ele={{}} selectFood={jest.fn()} />
      </StaticRouter>,
    );
    expect(component).toBeDefined();
  });

  it('Categoryfood snapshot testing', () => {
    const categoryfood = renderer.create(
      <StaticRouter>
        <Catagoryfood ele={{}} selectFood={jest.fn()} />
      </StaticRouter>,
    ).toJSON();
    expect(categoryfood).toMatchSnapshot();
  });
});
