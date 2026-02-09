
import demoData from './assets/generated.json';

const App = () => {

  return (
    <div className='musa'>
      {demoData.map((d) => (
        <div key={d._id}>
          <h1>{d.name}</h1>
          <p>Gender: {d.gender}</p>
          <p>Age: {d.age}</p>
          <p>Email: {d.email}</p>
          <p>Phone: {d.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default App;