import { useState } from 'react';
import { useReactFlow } from 'reactflow';
import PropTypes from 'prop-types';
import CustomHandle from '../handles/CustomHandle';
import { Position } from 'reactflow';
import { IoClose } from 'react-icons/io5';

const EndNode = ({ id, data: { label } }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setNodes } = useReactFlow();

  const handleDeleteNode = (e) => {
    e.stopPropagation();
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };
  return (
    <div
      className="w-fit relative bg-red-400 px-6 py-4 rounded border border-solid border-black text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-xs">{label}</div>
      {isHovered && (
        <div
          onClick={handleDeleteNode}
          className="absolute top-0 right-0 m-1  bg-black text-white rounded-full"
        >
          <IoClose size={12} />
        </div>
      )}
      <CustomHandle type="target" position={Position.Left} />
    </div>
  );
};

EndNode.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
};

export default EndNode;
