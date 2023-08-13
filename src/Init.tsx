import { Provider } from 'react-redux';
import { App } from './components/App';
import { store } from './slices';

export const Init = () => {
  return (
    <Provider store={store}>
      <div className="App min-h-screen bg-main bg-[length:100%_100%] bg-no-repeat  object-contain">
        <App />
      </div>
    </Provider>
  );
};
