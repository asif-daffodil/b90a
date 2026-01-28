import { useEffect, useState } from "react";

const App = () => {
  let [title, setTitle] = useState("Hello World");
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Ashraf Vai");
  }, []);

  const handleIncrement = () => { 
    setCount(count + 1);
  }

  const handleDecrement = () => { 
    setCount(count - 1);
  }

  return (
    <div>
      {title}
      <br /><br />
      <button onClick={() => setTitle("Bangladesh Jindabad")}>Bangladesh Jindabad</button>
      <button onClick={() => setTitle("Hello World")}>Hello World</button>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;