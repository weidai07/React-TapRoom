import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './reducers/beer-list-reducer';
import { Provider } from 'react-redux'; 
import rootReducer from './reducers/index';


const store = createStore(rootReducer);


let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store} >
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
