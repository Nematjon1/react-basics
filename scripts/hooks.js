import React, { useState, useEffect } from "react";

function Example() {
  // Declare a new state vairable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks"}]);

  useEffect(() => {
    // Update the document title using browser API
    document.title = `You clicked ${count} times`;
  })

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function FrindStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendsStatus(props.friends.id, hnadleStatusChange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  if(isOnline === null) {
    return "Loading...";
  }

  return isOnline ? "Online" : "Offline";
}

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if(isOnline === null) {
    return "Loading...";
  }

  return isOnline ? "Online" : "Offline";
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{color: isOnline ? "green" : "black"}}>
      {props.friend.name}
    </li>
  );
}

function ExampleWithManyStates() {
  // Declare multiple
}

function ExampleWithManyStates() {
  // Declare multiple state variables
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks"}]);
}

class FriendStatusWithCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isOnline: null
    }
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times!`;

    ChatAPI.subscribrToFriendStatus(this.props.id, this.handleStatusChange);
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentWilUnmount() {
    ChatAPI.unsubscribeFriendStatus(this.props.id, this.handleStatusChange);
  }

  handleStatusChange(status) {
    this.setState({isOnline: status.isOnline})
  }
}

function FreiendStatusWithCounter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count])

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleChange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    }
  }, [props.friend.id])
}

class FriendStatus extends Component {
  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(this.props.friend.id, this.handleChange);
  }

  componentDidUpdate(prevProps) {
    prevProps.friend.id, this.handlechange

    // subscribe to next feiend id
    ChatAPI.subscribeToFriendStatus(this.props.friend.id, this.handleChange)
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(this.props.friend.id, this.handleChange);
  }
}

function Form() {
  const [name, setName] = useState("Mary");

  useEffect(function persistForm() {
    if(name = "") {
      localStorage.setItem("formData", name);
    }
  });

  const [surname, setSurname] = useState("Poppins");

  useeffect(function updateTitle() {
    document.title = name + " " + surname;
  })
}

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useeffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatuschange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleChange);
    };
  });

  return isOnline;
}

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if(isOnline === null) {
    return "Loading...";
  }

  return isOnline ? "Online" : "Offline";
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return(
    <li style={{color: isOnline ? "green" : "black"}}>
      {props.friend.name}
    </li>
  );
}

// ------------
const friendList = [
  {id: 1, name: "Phoebe"},
  {id: 2, name: "Rachel"},
  {id: 3, name: "Ross"}
];

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <Circle color={isRecipientdOnline ? "green" : "red"} />
      <select
        value={recipinetID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {freindList.map(friend => {
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        })}
      </select>
    </>
  );
}

function useReducer(reducer, inititalState) {
  const [state, setState] = useState(initialState);
  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

function Todos() {
  const [todos, dispatch] = useReduce(todosReducer, []);

  function handleAddClick(text) {
    dispatch({type: "add", text});
  }
}
