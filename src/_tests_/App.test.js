import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../components/App';
import store from '../reducers/index';

describe('Testing App with redux', () => {
  it('App snapshot testing', () => {
    const app = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
