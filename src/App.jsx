import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Sidebar />
          <Content />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
