import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Catagoryfood from '../components/Categoryfood';

describe('Testing Filter with static router', () => {
  it('Category component is defined', async () => {
    const component = render(
      <StaticRouter>
        <Catagoryfood ele={{}} selectFood={jest.fn()} />
      </StaticRouter>,
    );
    expect(component).toBeDefined();
  });

  it('Filter snapshot testing', () => {
    const tree = renderer.create(
      <StaticRouter>
        <Catagoryfood ele={{}} selectFood={jest.fn()} />
      </StaticRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
