import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/students").then(res => {
      setData(res.data);
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const newStudent = { name, age, major };
    axios.post("http://localhost:3000/students", newStudent).then(res => {
      setData([...data, res.data]);
      setName("");
      setAge("");
      setMajor("");
    });
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Major"
          value={major}
          onChange={e => setMajor(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
      {data.map(d => (
        <div key={d.id}>{d.name} is {d.age} years old <button></button></div>
      ))}
    </div>
  );
};

export default App;