import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import manageCodEditor from './reducers/code-submission-reducer.js'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export const configureStore = () => {
  return createStore(manageCodEditor, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
