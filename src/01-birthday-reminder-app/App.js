import { useState } from "react";
import "./App.css";
import { data } from "./data";
import List from "./List";

function App() {
  const [footballer, setFootballer] = useState(data);
  return (
    <main className="container">
      <section >
        <h3>{footballer.length} Footballer</h3>
        <List footballer={footballer} />
        <button onClick={() => setFootballer([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
