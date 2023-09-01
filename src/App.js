import logo from "./logo.svg";
import "./App.css";
import Tours from "./components/Tours";
import { useState } from "react";
import data from "./Data";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h1>No Tours left</h1>
        <button onClick={() => setTours(data)} className="btn">
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
