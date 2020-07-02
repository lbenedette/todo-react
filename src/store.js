import { createStore } from 'redux'
import todoApp from './reducers'
import { loadState, saveState } from './localStorage'

const persistedStates = loadState();
const store = createStore(
  todoApp,
  persistedStates,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


console.log(store.getState())

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
    count: store.getState().count
  })
})

export default store;