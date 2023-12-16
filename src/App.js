import { Route, Routes } from "react-router-dom";
import AlphabetMath from "./pages/AlphabetMath";


function App() {
  return (
    <Routes>
      <Route path="/" element = {<AlphabetMath />}/>
    </Routes>
  );
}

export default App;
