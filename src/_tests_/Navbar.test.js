import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Testing Nav with router', () => {
  it('Nav is defined', async () => {
    const component = render(
      <StaticRouter>
        <Navbar />
      </StaticRouter>,
    );
    expect(component).toBeDefined();
  });

  it('Nav snapshot testing', () => {
    const nav = renderer.create(
      <StaticRouter>
        <Navbar />
      </StaticRouter>,
    ).toJSON();
    expect(nav).toMatchSnapshot();
  });
});
