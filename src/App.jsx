import { ReactFlowProvider } from 'reactflow';
import Home from './Home';

function App() {
  return (
    <ReactFlowProvider>
      <Home />
    </ReactFlowProvider>
  );
}

export default App;
