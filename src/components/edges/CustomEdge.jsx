import PropTypes from 'prop-types';
import {
  BezierEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from 'reactflow';
import { IoClose } from 'react-icons/io5';

const CustomEdge = (props) => {
  const { sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } =
    props;

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const { setEdges } = useReactFlow();

  const handleDeleteEdge = (e) => {
    e.stopPropagation();
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== props.id));
  };

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <div
          onClick={handleDeleteEdge}
          style={{
            transform: `translate(-50%,-50%) translate(${labelX}px, ${labelY}px)`,
          }}
          className="absolute text-red-400 rounded-full pointer-events-auto cursor-pointer"
        >
          <IoClose size={12} />
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

CustomEdge.propTypes = {
  props: PropTypes.object,
};

export default CustomEdge;
