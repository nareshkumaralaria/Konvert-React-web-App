import './App.css';
import './logo.svg';
import { Navbar } from './components/Navbar';
import { HexToRgb } from './components/HexToRgb';

const App = () => {
  return (
    <>
      <Navbar/>
      <HexToRgb/>
    </>
  );
}

export default App;
