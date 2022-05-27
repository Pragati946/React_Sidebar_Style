import logo from './logo.svg';
import './App.css';
// import { Button } from '@chakra-ui/react';
import {DrawerExample} from "./components/sidebar"
function App() {
  return (
    <div className="App">
       {/* <Button colorScheme='teal' size='lg'>
    Button
  </Button> */}
  <DrawerExample/>
    </div>
  );
}

export default App;
