import { useState } from 'react';
import { useReactFlow } from 'reactflow';
import { v4 as uuidv4 } from 'uuid';
import { getRandomInt } from '../utils/constants';

const Options = () => {
  const { setNodes } = useReactFlow();

  const [label, setLabel] = useState('');

  const handleAddNode = (type) => {
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: uuidv4(),
        data: { label: label },
        position: { x: getRandomInt(-100, 100), y: getRandomInt(-100, 100) },
        type: type,
      },
    ]);
    setLabel('');
  };

  return (
    <div className="w-full h-full items-center flex flex-col gap-y-6 p-4">
      <h1 className="text-center text-5xl font-semibold">Options</h1>
      <div className="flex flex-wrap gap-4">
        {/* Add Source Node */}
        <button
          disabled={!label}
          onClick={() => handleAddNode('sourceNode')}
          className="py-2 px-4 text-white bg-blue-400 hover:bg-blue-600 rounded-xl"
        >
          Add Source Node
        </button>

        {/* Add Modify Node */}
        <button
          disabled={!label}
          onClick={() => handleAddNode('middleNode')}
          className="py-2 px-4 text-white bg-orange-400 hover:bg-orange-600 rounded-xl"
        >
          Add Middle Node
        </button>

        {/* Add End Node */}
        <button
          disabled={!label}
          onClick={() => handleAddNode('endNode')}
          className="py-2 px-4 text-white bg-red-400 hover:bg-red-600 rounded-xl"
        >
          Add End Node
        </button>
      </div>
      <div className="w-full">
        <label className="block w-full text-xl" htmlFor="label">
          Node Label:
        </label>
        <input
          className="border border-solid border-black w-full h-8 rounded pl-2"
          type="text"
          name="label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Options;
