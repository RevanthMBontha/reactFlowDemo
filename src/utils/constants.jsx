import SourceNode from '../components/nodes/SourceNode';
import MiddleNode from '../components/nodes/MiddleNode';
import EndNode from '../components/nodes/EndNode';
import CustomEdge from '../components/edges/CustomEdge';

export const initialNodes = [];

export const initialEdges = [];

export const nodeTypes = {
  sourceNode: SourceNode,
  middleNode: MiddleNode,
  endNode: EndNode,
};

export const edgeTypes = {
  customEdge: CustomEdge,
};

// Generate a random integer between min (inclusive) and max (exclusive)
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
