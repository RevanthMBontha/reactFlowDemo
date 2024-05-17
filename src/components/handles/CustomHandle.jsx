import { Handle } from 'reactflow';

const CustomHandle = (props) => {
  return (
    <Handle
      {...props}
      style={{
        width: 8,
        height: 8,
        background: 'white',
        border: '1px solid black',
      }}
    />
  );
};

export default CustomHandle;
