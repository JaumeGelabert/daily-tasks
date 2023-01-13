// Context
import { createContext, useState } from 'react';

// Routing imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Chakra imports
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';

// Page imports
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';

export const TasksContext = createContext(null);

function App() {
  const [refreshTasks, setRefreshTasks] = useState(false);
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <TasksContext.Provider value={{ refreshTasks, setRefreshTasks }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </TasksContext.Provider>
      </ChakraProvider>
    </div>
  );
}

export default App;
