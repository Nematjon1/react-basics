// useState implementation
function Counter(initialCount) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Rest</button>
      <button onClick={() => setConunt(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </>
  );
}

// Updating object
setState(prevState => {
  // Object.assign would also work
  return {...prevState, ...updatedValues};
})

// lazy initial state
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
})

// useEffect hook
useEffect(() => {
  const subscription = props.sourcee.subscribe();
  return () => {
    // Clean up the subscription
    subscription.unsubscribe();
  }
}, [props.source])

// useContext implementation
const value = useContext(MyContext);

// useReducer hook implementation.
const [state, dispatch] = useReducer(reducer, initialArg, init);

const initialState = {count: 0};

function init(initialCount) {
  return {count: initialCount};
}
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, setState] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset", payload: iniialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
    </>
  );
}

// useCallback implementation.
const memoizedCallback = useCallback(() => {
  doSomething(a,b);
}, [a,b]);

// useMemo implementation.
const memoizedValue = useMemo(() => computeExpensiveValur(a, b), [a,b]);

// useRef implementation.
const refContainer = useRef(initialValue);

function TextInputWithFocusButton() {
  const inputE1 = useRef(null);
  const onButtonClick = () => {
    // `currnet` points to the mounted text input element
    inputE1.current.focus();
  };
  return (
    <>
      <input ref={inputE1} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

// useImperativeHandle implementataion
useImperativeHandle(ref, createHandle, [deps]);

fnction FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);

// useLayoutEffect
// use useEffect if possible, useLayoutEffect similar.

// useDebugValue
useDebugValue(value);

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? "Onilne" : "Offline");

  return isOnline;
}

useDebugValue(date, date => date.toDateString());
