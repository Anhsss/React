import './My.css';

function MyTime() {
  return (
    <div>
    <h1 className='myt'> {new Date().toLocaleTimeString()}
    </h1>
    </div>
  );
}

export default MyTime;