

import { BrowserRouter } from "react-router-dom";
import ConfigRoute from "./ConfigRoute";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <ConfigRoute />
      </BrowserRouter>
    </div>
  );
}
export default App;
