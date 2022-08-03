import { Route, Routes,Link } from "react-router-dom";
import "./App.css";
import Classcomponent from "./components/class/Classcomponent";
import User from "./components/functional/User";
import Input from "./components/input/Input";
import Props from "./components/props/Props";
import Variable from "./components/variable/Variable";

function App() {
  return (
    <div>
    <nav>
      <ul>
        <li><Link to="/">User</Link></li>
        <li><Link to="/class">Classcomponent</Link></li>
        <li><Link to="/variable">Variable</Link></li>
        <li><Link to="/props">Props</Link></li>
        <li><Link to="/input">Input</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/class" element={<Classcomponent />} />
        <Route path="/variable" element={<Variable />} />
        <Route path="/props" element={<Props />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
