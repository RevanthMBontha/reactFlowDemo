import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import Options from './components/Options';
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'reactflow/dist/style.css';
import {
  initialNodes,
  initialEdges,
  nodeTypes,
  edgeTypes,
} from './utils/constants';

const Home = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const testEdges = [];

  const onConnect = useCallback((connection) => {
    const edge = {
      ...connection,
      animated: true,
      id: uuidv4(),
      type: 'customEdge',
    };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  }, []);

  return (
    <div className="flex w-screen h-screen">
      <div className="w-2/3 h-screen">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
      <div className="custom-shadow w-1/3">
        <Options />
      </div>
    </div>
  );
};

export default Home;
