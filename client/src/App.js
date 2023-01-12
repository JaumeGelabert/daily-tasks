// ReactRouter imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Chakra imports
import { ChakraProvider } from '@chakra-ui/react';
import Landing from './pages/Landing/Landing';

// Chakra theme import
import { theme } from './styles/theme';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
