import Header from "./components/Header";
import PersonInfo from "./components/PersonInfo";

const App = () => {
  return (
    <div>
      <Header />
      <Header />
      <PersonInfo name="Arafat Mohon" gender="Male" age="20" area="Azimpur | Dhaka | Bangladesh" />
      <PersonInfo name="Ashraf Guru" gender="Male" age="31" area="Indira Road | Dhaka | Bangladesh" />
      <PersonInfo name="Aditta Rahman" gender="Male" age="23" area="Khilkhet | Dhaka | Bangladesh" />
      <h1>Hello World!</h1>
      <h6>Hello World!</h6>
      <p>Hello Wordld!</p>
      <button>Hello World!</button>
    </div>
  );
};

export default App;