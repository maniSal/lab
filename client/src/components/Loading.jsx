import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
   <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
 <Spinner 
        animation="border" 
        role="status" 
        style={{ 
          width: '4rem', 
          height: '4rem', 
          color: '#6f42c1' 
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
   </div>
  );
}

export default Loading;