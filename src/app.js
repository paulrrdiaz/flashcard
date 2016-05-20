const cards = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      });

      return state.concat([newCard]);
    default:
      return state || [];
  }
}
const store = Redux.createStore(Redux.combineReducers({
  cards
}));

const App = (props) => {
  return (
    <div class='app'>
      <h1>Hello World :3</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

