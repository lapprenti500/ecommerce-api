import {ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Router> 
        <Navbar>
          <main>
            <Routes>
              
            </Routes>
          </main>
        </Navbar>
      </Router>
    </ChakraProvider>
  );
}

export default App;
