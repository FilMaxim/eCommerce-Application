import { Provider } from 'react-redux';
import { App } from './components/App';
import { store } from './slices';

export const Init = () => {
  return (
    <Provider store={store}>
      <div className="flex min-h-screen flex-col justify-between">
        <App />
      </div>
    </Provider>
  );
};
