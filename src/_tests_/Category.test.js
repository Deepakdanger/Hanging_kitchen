import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Category from '../components/Category';

describe('Testing Filter with static router', () => {
  it('Category component is defined', async () => {
    const component = render(
      <StaticRouter>
        <Category ele={{}} selectCategory={jest.fn()} />
      </StaticRouter>,
    );
    expect(component).toBeDefined();
  });

  it('Category snapshot testing', () => {
    const category = renderer.create(
      <StaticRouter>
        <Category ele={{}} selectCategory={jest.fn()} />
      </StaticRouter>,
    ).toJSON();
    expect(category).toMatchSnapshot();
  });
});
