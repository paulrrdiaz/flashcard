import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import { addDeck, showAddDeck, hideAddDeck } from './actions';
import * as reducers from './reducers';
import App from './components/App';
import Sidebar from './components/Sidebar';

const store = Redux.createStore(Redux.combineReducers(reducers));

function run() {
  let state = store.getState();
  console.log(state);
  ReactDOM.render((<App>
    <Sidebar
      decks={state.decks}
      addingDeck={state.addingDeck}
      addDeck={(name) => store.dispatch(addDeck(name))}
      showAddDeck={() => store.dispatch(showAddDeck())}
      hideAddDeck={() => store.dispatch(hideAddDeck())}
    />                
  </App>), document.getElementById('root'));
}

run();

store.subscribe(run);

