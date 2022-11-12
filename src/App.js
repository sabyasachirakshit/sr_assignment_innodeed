import "./App.css";
import UI from "./components/UI";
import { useState, useEffect } from "react";
function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
    fetch("cars.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <h1>InnoDeed Cars</h1>
      <UI data={data} />
    </>
  );
}

export default App;
