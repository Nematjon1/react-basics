import React, {useState, useEffect} from "react";

/**
  * Ajax calls in typical React Components
**/
const MyComponent = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true);
        setItems(result.items)
      }, error => {
        setError(error);
        setIsLoaded(true)
      })
  }, []);

  if(error) <div>Error: {error.message}</div>;
  else if (!isLoaded) <div>Loading...</div>;
  else {
    return (
      <ul>
        {items.map(item => {
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        })}
      </ul>
    );
  }
};
