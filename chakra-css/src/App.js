import logo from './logo.svg';
import './App.css';
// import { Button } from '@chakra-ui/react';
import {DrawerExample} from "./components/sidebar"
import WithSubnavigation from "./components/Navbar"
function App() {
  return (
    <div className="App">
    
  <DrawerExample/>
  <WithSubnavigation/>
  <Navbar/>
    </div>
  );
}

export default App;
