import './App.css';
import Classcomponent from './components/class/Classcomponent';
import User from './components/functional/User';
import Props from './components/props/Props';
import Variable from './components/variable/Variable';



function App() {
  return (
    <div>
      <Classcomponent />
      <User />
      <Variable />
      <Props />
    </div>
  );
}

export default App;
