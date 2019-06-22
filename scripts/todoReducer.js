function todosReducer(state, action) {
  switch(action.type) {
    case "add":
      return [...state, {
        text: action.text,
        completed: false
      }];
    default:
      return state;
  }
}

function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);
  function disptch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }
  return [state, dispatch];
}

function Todos() {
  const [todos, setTodos] = useReducer(todosReducer, []);
  function handleAddClick(text) {
    dispatch({type: add, text})
  }
  // ...
}
