import "./App.css";
import UI from "./components/UI";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
    fetch("cars.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Navbar />
      <h1>InnoDeed Cars</h1>
      <UI data={data} />
    </>
  );
}

export default App;
